FROM node:14.4.0

WORKDIR /code

COPY . /code

WORKDIR /code/client

RUN yarn

RUN yarn build

WORKDIR /code/server

RUN yarn

RUN yarn run build

WORKDIR /code

RUN npm install -g serve

EXPOSE 8000

EXPOSE 8080

RUN serve -l 8000 -s /code/client &

CMD [ "node", "/code/server/dist/index.js" ]

