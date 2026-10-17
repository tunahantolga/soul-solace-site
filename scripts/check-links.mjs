#!/usr/bin/env node
// Verifies every link in the built site (dist/):
//  - internal href/src/srcset targets exist on disk
//  - #fragments point at an existing id on the target page
//  - page links end with "/" so they work on any static host without rewrites
// With --external, also requests every external URL and reports failures.
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const DIST = path.resolve(process.argv.find((a) => !a.startsWith("-") && a !== process.argv[0] && a !== process.argv[1]) ?? "dist");
const CHECK_EXTERNAL = process.argv.includes("--external");

const walk = async (dir) =>
  (await readdir(dir, { withFileTypes: true })).flatMap((e) => (e.isDirectory() ? [] : [path.join(dir, e.name)])).concat(
    ...(await Promise.all(
      (await readdir(dir, { withFileTypes: true })).filter((e) => e.isDirectory()).map((e) => walk(path.join(dir, e.name))),
    )),
  );

const exists = async (p) => {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
};

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');

const pages = (await walk(DIST)).filter((f) => f.endsWith(".html"));
const ids = new Map();
const links = [];

for (const file of pages) {
  const html = await readFile(file, "utf8");
  const route = "/" + path.relative(DIST, file).replace(/index\.html$/, "").replace(/\\/g, "/");
  ids.set(route, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  for (const m of html.matchAll(/\s(href|src|srcset)="([^"]*)"/g)) {
    const urls = m[1] === "srcset" ? m[2].split(",").map((s) => s.trim().split(/\s+/)[0]) : [m[2]];
    for (const url of urls) if (url) links.push({ route, attr: m[1], url: decode(url) });
  }
}

const errors = [];
const external = new Set();

for (const { route, url } of links) {
  if (/^(mailto|tel|data|javascript):/.test(url)) continue;
  if (/^https?:\/\//.test(url)) {
    if (!url.startsWith("https://integratifenstitu.com")) external.add(url);
    continue;
  }
  const target = new URL(url, `https://site${route}`);
  const p = decodeURIComponent(target.pathname);
  const file = p.endsWith("/") ? path.join(DIST, p, "index.html") : path.join(DIST, p);

  if (!p.endsWith("/") && !path.extname(p)) {
    errors.push(`${route}: "${url}" is a page link without a trailing slash`);
  } else if (!(await exists(file))) {
    errors.push(`${route}: "${url}" → missing ${path.relative(DIST, file)}`);
  } else if (target.hash && p.endsWith("/")) {
    const id = decodeURIComponent(target.hash.slice(1));
    if (!ids.get(p)?.has(id)) errors.push(`${route}: "${url}" → no element with id="${id}" on ${p}`);
  }
}

if (CHECK_EXTERNAL) {
  const results = await Promise.all(
    [...external].map(async (url) => {
      try {
        const res = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(15000) });
        return res.ok || res.status === 403 || res.status === 429 ? null : `${url} → HTTP ${res.status}`;
      } catch (e) {
        return `${url} → ${e.cause?.code ?? e.name}`;
      }
    }),
  );
  errors.push(...results.filter(Boolean));
}

console.log(`Checked ${links.length} links on ${pages.length} pages (${external.size} unique external${CHECK_EXTERNAL ? ", fetched" : ", not fetched"}).`);
if (errors.length) {
  console.error(`\n${errors.length} broken link(s):\n` + errors.map((e) => "  ✗ " + e).join("\n"));
  process.exit(1);
}
console.log("All links OK.");
