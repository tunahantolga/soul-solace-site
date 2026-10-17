import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";
import type { ResponsiveImage } from "@/lib/types";

/**
 * Build-time image optimization for React components: Astro resizes the
 * source into WebP variants and the component renders a plain <img srcSet>.
 */
export async function responsiveImage(
  image: ImageMetadata,
  widths: number[] = [640, 960, 1280],
): Promise<ResponsiveImage> {
  const usable = widths.filter((w) => w < image.width);
  usable.push(Math.min(image.width, Math.max(...widths)));

  const result = await getImage({ src: image, widths: [...new Set(usable)], format: "webp" });

  return {
    src: result.src,
    srcSet: result.srcSet.attribute,
    width: image.width,
    height: image.height,
  };
}
