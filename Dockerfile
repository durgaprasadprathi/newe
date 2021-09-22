FROM ubuntu:latest

MAINTAINER naiduprathi09@gmail.com

WORKDIR /usr/apps/docker/

RUN apt-get -y update

RUN apt-get install -y nodejs

RUN apt-get install -y npm

#RUN ln -s /usr/bin/nodejs /usr/bin/node........;;;;;

RUN npm install -g http-server

ADD . /usr/apps/hello-docker/

ADD .* /usr/apps/hello-docker/

ADD ./public/index.html /usr/apps/docker/index.html

CMD ["http-server", "-s"]
