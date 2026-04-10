# Use a stable Node base image for build and production
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files and build the application
COPY . .
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist ./dist
RUN npm install -g serve

EXPOSE 4173
ENV NODE_ENV=production
CMD ["serve", "-s", "dist", "-l", "4173"]
