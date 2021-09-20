FROM alpine:3.7

MAINTAINER naiduprathi09@gmail.com

WORKDIR /usr/apps/my_docker_test/

RUN apk add --update bash

#RUN apk add nodejs

RUN apk add --update nodejs nodejs-npm

#RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g http-server

ADD . /usr/apps/my_docker_test/

ADD ./public /usr/apps/my_docker_test/public

ADD ./src /usr/apps/my_docker_test/src

ADD ./old.json /usr/apps/my_docker_test/old.json

ADD ./package-lock.json /usr/apps/my_docker_test/package-lock.json

ADD ./package.json /usr/apps/my_docker_test/package.json

ADD ./tsconfig.json /usr/apps/my_docker_test/tsconfig.json

ADD ./yarn.lock /usr/apps/my_docker_test/yarn.lock

CMD ["http-server", "-s"]
