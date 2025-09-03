# syntax=docker/dockerfile:1

# Builder stage
FROM node:20 AS builder
WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable

# Copy workspace files
COPY . .

# Install dependencies for the API package and its workspace deps
RUN pnpm install --filter api...

# Build the API
RUN pnpm build --filter api...

# Prune dev dependencies
RUN pnpm prune --prod --filter api...

# Runtime stage
FROM node:20-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Copy compiled output and pruned node_modules
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api/package.json ./package.json

CMD ["node", "dist/main.js"]
