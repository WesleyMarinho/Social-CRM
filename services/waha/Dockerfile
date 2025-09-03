# syntax=docker/dockerfile:1

FROM node:20 AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY services ./services
COPY packages ./packages
RUN corepack enable && pnpm install --filter waha...
RUN pnpm build

FROM node:20 AS runtime
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/packages ./packages
COPY --from=build /app/services/waha/dist ./services/waha/dist
WORKDIR /app/services/waha
CMD ["node", "dist/index.js"]
