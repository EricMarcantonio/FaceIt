FROM node:14

WORKDIR /usr/src/app

COPY ./public ./public

RUN npm install -g serve

EXPOSE 5000

RUN ls

CMD [ "serve", "-s", "public"]