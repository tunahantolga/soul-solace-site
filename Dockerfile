FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Static output served by a tiny web server (clean URLs and 404.html are handled by `serve`)
FROM node:22-alpine AS runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

EXPOSE 4173
ENV NODE_ENV=production
CMD ["serve", "dist", "-l", "4173"]
