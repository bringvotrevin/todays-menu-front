# FROM node:18

# WORKDIR /app

# COPY package.json yarn.lock ./

# RUN yarn install

# COPY . .

# EXPOSE 3000

# CMD ["yarn", "start"]


# Build stage
FROM node:18 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Production stage
FROM nginx:1.21.1

COPY --from=builder /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
