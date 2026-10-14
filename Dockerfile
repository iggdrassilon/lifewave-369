# Static delivery of the SPA: Vite builds it once, nginx serves the result.
#
# The previous Dockerfile installed production dependencies only and ran
# `yarn start` (= `vite start`, not a Vite command), so it could not serve the
# site at all. Build tools live in devDependencies, hence a full `yarn install`
# in the build stage and nothing but static files in the final image.
FROM node:22-slim AS build
WORKDIR /app

# Lockfile and the pinned Yarn release first: dependency layer stays cached
# while page content changes.
COPY package.json yarn.lock .yarnrc ./
COPY .yarn ./.yarn
RUN yarn install --frozen-lockfile --network-timeout 600000

COPY . .

# The host runs close to its memory limit; the default heap plus the image
# optimizer on ~22 MB of PNG/JPEG is what pushes the build into the OOM killer.
ENV NODE_OPTIONS=--max-old-space-size=2048
RUN yarn build

FROM nginx:alpine
# Same document root as the project's own nginx config expects.
COPY --from=build /app/dist /var/www/cell
COPY .nginx/container.conf /etc/nginx/conf.d/default.conf
# The config `include`s this file; on the author's server it is maintained by
# hand, here it ships empty so the directive resolves.
COPY .nginx/blocked_ips.conf /etc/nginx/blocked_ips.conf
# The config logs to its own file names, which inside a container would mean
# logs nobody reads and a writable layer that only grows. Point them at the
# container's stdout/stderr so `docker logs lifewave-369` just works.
RUN ln -sf /dev/stdout /var/log/nginx/cell_access.log \
 && ln -sf /dev/stderr /var/log/nginx/cell_error.log
EXPOSE 80
