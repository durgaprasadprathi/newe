FROM ubuntu:latest

MAINTAINER naiduprathi09@gmail.com

WORKDIR /usr/apps/docker/

RUN apt-get -y update

RUN apt-get install -y nodejs

RUN apt-get install -y npm

#RUN ln -s /usr/bin/nodejs /usr/bin/node........;;;;;

RUN npm install -g http-server

RUN npm install

RUN npm start

RUN npm run build

ADD package.json /usr/apps/docker/package.json

CMD ["http-server", "-s"]
