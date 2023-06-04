FROM node:18-alpine
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

ARG PORT
ENV PORT=${PORT}

EXPOSE ${PORT}

COPY package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY . ./

RUN pnpm run build

CMD ["pnpm", "run", "serve"]