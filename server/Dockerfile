FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN npm install -g typescript

RUN tsc

EXPOSE 3000

RUN ls

CMD [ "node", "dist/"]