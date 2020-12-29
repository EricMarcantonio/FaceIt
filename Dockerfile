FROM node

WORKDIR /code

COPY . /code

WORKDIR /code/client

RUN yarn

RUN yarn build

EXPOSE 5000

CMD [ "serve -s", "./build" ]

WORKDIR /code/server

RUN yarn

RUN yarn build

EXPOSE 8080

CMD [ "node", "/dist/index.js" ]

