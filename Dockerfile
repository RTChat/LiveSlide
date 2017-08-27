FROM node:alpine
EXPOSE 9001
ENTRYPOINT [ "node", "node_modules/rtchat/server.js", "--plugin=imgur_upload" ]

# Install dependencies
RUN apk update && \
    apk upgrade
RUN apk add git python make g++

# Create app directory
RUN mkdir -p /usr/src/app/dist
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json /usr/src/app/
RUN npm install --only=production

# Bundle app source
COPY app /usr/src/app/app
COPY index.html /usr/src/app/
COPY webpack.config.js /usr/src/app/
RUN ln -s ../node_modules/rtchat/dist/bundle.js dist/rtchat.bundle.js

# Build
RUN node_modules/.bin/webpack

