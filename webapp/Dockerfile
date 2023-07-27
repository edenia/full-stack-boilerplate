FROM node:16.14.0-alpine  as build-stage

ARG next_public_tag
ARG next_public_name
ARG next_public_title
ARG next_public_logo
ARG next_public_footer_links
ARG next_public_ual_app_name
ARG next_public_ual_api_protocol
ARG next_public_ual_api_host
ARG next_public_ual_api_port
ARG next_public_ual_chain_id
ARG next_public_hasura_url

ENV NEXT_PUBLIC_TAG $next_public_tag
ENV NEXT_PUBLIC_NAME $next_public_name
ENV NEXT_PUBLIC_TITLE $next_public_title
ENV NEXT_PUBLIC_LOGO $next_public_logo
ENV NEXT_PUBLIC_FOOTER_LINKS $next_public_footer_links
ENV NEXT_PUBLIC_UAL_APP_NAME $next_public_ual_app_name
ENV NEXT_PUBLIC_UAL_API_PROTOCOL $next_public_ual_api_protocol
ENV NEXT_PUBLIC_UAL_API_HOST $next_public_ual_api_host
ENV NEXT_PUBLIC_UAL_API_PORT $next_public_ual_api_port
ENV NEXT_PUBLIC_UAL_CHAIN_ID $next_public_ual_chain_id
ENV NEXT_PUBLIC_HASURA_URL $next_public_hasura_url

WORKDIR /usr/src/app

COPY package.json .

COPY yarn*.lock .

RUN yarn --frozen-lockfile

COPY . .

ENV GENERATE_SOURCEMAP false

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

