FROM mhart/alpine-node:10.15

RUN apk update && apk upgrade && apk add git

WORKDIR /src
ADD . .
RUN yarn install && yarn run build && yarn install --production

ENV NODE_ENV production
CMD ["yarn", "run", "start:prod"]
