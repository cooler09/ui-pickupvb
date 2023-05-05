#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
#stage 2
FROM nginx:1-bullseye
COPY --from=node /app/dist/ui-pickupvb /usr/share/nginx/html