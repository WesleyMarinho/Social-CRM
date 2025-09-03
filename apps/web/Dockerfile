# syntax=docker/dockerfile:1

### Builder stage ###
FROM node:20 AS builder

WORKDIR /app
# Enable pnpm via corepack
RUN corepack enable

# Copy the entire monorepo
COPY . .

# Install only the web workspace dependencies
RUN pnpm install --filter web...

# Build the Next.js application
RUN pnpm --filter web... build

### Runtime stage ###
FROM node:20 AS runner

ENV NODE_ENV=production
WORKDIR /app

# Copy production node_modules and built app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web ./apps/web

# Expose the default Next.js port
EXPOSE 3000

# Run the Next.js application
WORKDIR /app/apps/web
CMD ["node_modules/.bin/next", "start"]

