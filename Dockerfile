FROM node:14

WORKDIR /usr/src/app

COPY /server ./

RUN npm install

RUN npm install -g typescript

RUN tsc

EXPOSE 3000


CMD [ "node", "html/"]