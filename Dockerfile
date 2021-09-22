FROM ubuntu:latest

MAINTAINER naiduprathi09@gmail.com

RUN apt-get -y update

RUN apt-get install -y nodejs

RUN apt-get install -y npm

#RUN ln -s /usr/bin/nodejs /usr/bin/node........;;;;;

RUN npm install -g http-server

RUN npm install

RUN npm start

RUN npm run build



CMD ["http-server", "-s"]
