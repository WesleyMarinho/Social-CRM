# syntax=docker/dockerfile:1
FROM node:20

WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable

# Copy repository files
COPY . .

# Install dependencies
RUN pnpm install

# Expose default Next.js port
EXPOSE 3000

# Start development mode
CMD ["pnpm", "dev"]
