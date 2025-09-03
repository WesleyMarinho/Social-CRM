# Omni CRM

Monorepo skeleton for an omni-inbox CRM. This repo currently contains only
starter configuration and shared types. It is a starting point for integrating
Telegram (TDLib) and WhatsApp via WAHA.

## Getting started

```bash
# 1) Install
pnpm i

# 2) Configure env
cp .env.example .env
# fill TELEGRAM_API_ID / TELEGRAM_API_HASH / WAHA_* variables

# 3) Migrate & seed
docker compose up -d postgres
pnpm -C packages/db prisma migrate dev
pnpm -C packages/db prisma db seed

# 4) Start stack
docker compose up -d redis nats minio
pnpm dev  # runs api, web, connectors in watch mode

# 5) Telegram login (interactive in dev)
pnpm -C services/telegram login:ch_telegram_1

# 6) Expose WAHA webhook to your API publicly
#    POST {API_PUBLIC_URL}/connectors/waha/webhook  with header X-WAHA-Token
```

More components and features will be added over time.
