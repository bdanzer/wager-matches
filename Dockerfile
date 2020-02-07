FROM node:12.14.0

WORKDIR /usr/src/app

EXPOSE 3000

RUN npm install
RUN npm rebuild node-sass
CMD [ "npm", "start" ]