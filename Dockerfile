FROM mhart/alpine-node:10.15

RUN apk update && apk upgrade && apk add git

ARG FONTAWESOME_TOKEN
WORKDIR /src
ADD . .
RUN yarn install
RUN rm .npmrc

ENV NODE_ENV production
CMD ["yarn", "run", "start:prod"]
