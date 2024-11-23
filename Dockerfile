FROM node:22


WORKDIR /usr/src/app

COPY .projet docker/app/package*.json  ./

RUN npm isntall 

COPY ./app .

EXPOSE 3000


