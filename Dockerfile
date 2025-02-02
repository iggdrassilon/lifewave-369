ARG DOCKER_BUILDKIT=1
FROM node:18-slim AS build-deps
WORKDIR /usr/src/client
COPY package*.json .
RUN yarn install --production


FROM node:18-slim
WORKDIR /usr/src/client
COPY --from=build-deps /usr/src/client/node_modules ./node_modules
COPY . .
CMD ["yarn", "start"]
