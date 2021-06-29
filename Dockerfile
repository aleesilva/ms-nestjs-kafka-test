FROM node:14.17.0-alpine3.13

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.6.0

USER node 

WORKDIR /home/node/app