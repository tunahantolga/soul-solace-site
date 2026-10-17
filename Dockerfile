FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build && npm run check:links

# Static output served by a tiny web server: /route/ -> route/index.html,
# unknown paths -> 404.html. Listens on $PORT when the platform sets it.
FROM node:22-alpine AS runner
WORKDIR /app
RUN npm install -g serve@14.2.6
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production PORT=4173
EXPOSE 4173
CMD ["sh", "-c", "exec serve dist --no-port-switching -l tcp://0.0.0.0:${PORT}"]
