#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
#stage 2
FROM nginx:latest
COPY --from=node /app/dist/ui-pickupvb /usr/share/nginx/html