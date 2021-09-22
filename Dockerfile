FROM alpine:3.7

MAINTAINER naiduprathi09@gmail.com

WORKDIR /usr/apps/my_docker_test/

RUN apk add --update bash

#RUN apk add nodejs

RUN apk add --update nodejs nodejs-npm

#RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g http-server

Add * /usr/apps/my_docker_test/

CMD ["http-server", "-s"]
