# ---------- Base ----------
FROM node:18.18.0 as base
WORKDIR /app

# ---------- Builder ----------
FROM base AS builder
COPY package.json yarn.lock ./
RUN yarn --ignore-optional
COPY ./ ./
RUN yarn build

# ---------- Release ----------
FROM base AS release
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./src
USER node
CMD ["node", "./src/index.js"]