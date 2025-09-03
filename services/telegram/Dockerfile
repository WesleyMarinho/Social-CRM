FROM ubuntu:22.04

# Install Node.js 20 and pnpm
RUN apt-get update && apt-get install -y curl git build-essential ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g pnpm

# Build TDLib and ensure tdjson is available
RUN apt-get update && apt-get install -y gperf cmake libssl-dev zlib1g-dev libreadline-dev \
    && git clone --depth=1 https://github.com/tdlib/td.git /tmp/td \
    && cd /tmp/td && mkdir build && cd build \
    && cmake -DCMAKE_BUILD_TYPE=Release .. \
    && cmake --build . --target install \
    && cd / && rm -rf /tmp/td \
    && ldconfig

WORKDIR /app

# Copy repository sources
COPY . .

# Install only telegram service dependencies
RUN pnpm install --filter telegram... --frozen-lockfile

# Build TypeScript sources
WORKDIR /app/services/telegram
RUN pnpm tsc -p tsconfig.json --outDir dist

CMD ["node", "dist/index.js"]
