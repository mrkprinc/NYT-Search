FROM mhart/alpine-node:10.15

RUN apk update && apk upgrade && apk add git

WORKDIR /src
ADD . .
RUN yarn install

ENV NODE_ENV production
CMD ["yarn", "run", "start:prod"]
