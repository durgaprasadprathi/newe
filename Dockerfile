FROM ubuntu:latest

MAINTAINER naiduprathi09@gmail.com

WORKDIR /usr/apps/docker/

RUN apt-get -y update

RUN apt-get install -y nodejs

RUN apt-get install -y npm

#RUN ln -s /usr/bin/nodejs /usr/bin/node........;;;;;

RUN npm install -g http-server





ADD public /usr/apps/docker/public

ADD src /usr/apps/docker/src

ADD yarn.lock /usr/apps/docker/yarn.lock

ADD tsconfig.json /usr/apps/docker/tsconfig.json

ADD package.json /usr/apps/docker/package.json

ADD package-lock.json /usr/apps/docker/package-lock.json

ADD old.json /usr/apps/docker/old.json

ADD README.md /usr/apps/docker/README.md

ADD . /usr/apps/docker/

ADD .* /usr/apps/docker/

RUN npm install

RUN npm run build

ADD ./public/index.html /usr/apps/docker/index.html

CMD ["http-server", "-s"]
