# ─────────────────────────────────────────────
#  Stage 1 – Build
# ─────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NITRO_PRESET=node-server
RUN npm run build

# ─────────────────────────────────────────────
#  Stage 2 – Runner
# ─────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

# Copia todo o output compilado do Nitro do estágio de build
COPY --from=builder /app/.output /app/.output

# A porta padrão onde a app roda (em Railway ela pode ser substituída pela variável PORT)
EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production

CMD ["node", ".output/server/index.mjs"]