FROM node:18-alpine AS base

WORKDIR /app

ARG next_public_tag
ARG next_public_name
ARG next_public_title
ARG next_public_logo
ARG next_public_footer_links
ARG next_public_network_chain_index
ARG next_public_custom_network_chain
ARG next_public_hasura_url

ENV NEXT_PUBLIC_TAG $next_public_tag
ENV NEXT_PUBLIC_NAME $next_public_name
ENV NEXT_PUBLIC_TITLE $next_public_title
ENV NEXT_PUBLIC_LOGO $next_public_logo
ENV NEXT_PUBLIC_FOOTER_LINKS $next_public_footer_links
ENV NEXT_PUBLIC_NETWORK_CHAIN_INDEX $next_public_network_chain_index
ENV NEXT_PUBLIC_CUSTOM_NETWORK_CHAIN $next_public_custom_network_chain
ENV NEXT_PUBLIC_HASURA_URL $next_public_hasura_url

# ---------- Deps Installer ----------
FROM base AS deps

COPY package.json yarn.lock* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile --production; \
  else echo "Lockfile not found." && exit 1; \
  fi


# ---------- Builder -----------------
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# ---------- Release -----------------
FROM base AS runner

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
