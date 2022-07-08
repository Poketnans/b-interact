FROM node:16

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH
ENV CKOKIDAR_USEPOLLING=true

COPY ./package.json /client/

RUN yarn install

EXPOSE 3000

COPY . /client/
