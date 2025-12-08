FROM node:24-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk --no-cache add jq perl rsync yq

RUN corepack enable

FROM base AS build

COPY . /build

WORKDIR /build

RUN apk --no-cache add wget bash
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build

FROM nginx:latest AS prod

COPY --from=build /build/dist/ /usr/share/nginx/html/
COPY docker/nginx.conf /etc/nginx/nginx.conf
ne AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk --no-cache add jq perl rsync yq

RUN corepack enable
