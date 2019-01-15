FROM node:10.15

ENV APP_ROOT /app

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
