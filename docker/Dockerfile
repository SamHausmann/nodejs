FROM rosetteapi/docker-base-layer
MAINTAINER Sam Hausmann
ENV LANGUAGE=nodejs

#install necessary packages
RUN apt-get -y update && apt-get install -y \
	nodejs \
	npm

RUN npm install -g grunt-cli && npm install -g eslint

ENV API_KEY api_key

RUN mkdir /test-dev/tests

CMD ./docker-entrypoint.sh $API_KEY $FILENAME $ALT_URL $LANGUAGE
