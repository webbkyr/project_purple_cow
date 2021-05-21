# stage to build front end assets
FROM node:14-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

# nginx stage for serving the assets
FROM nginx:alpine

# set working directory to asset dir
WORKDIR /usr/share/nginx/html

# remove default nginx assets
RUN rm -rf ./*

# copy assets from builder stage
COPY --from=builder /app/dist .

# containers run ngnix with global directives and daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
