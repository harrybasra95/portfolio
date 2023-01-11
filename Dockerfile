FROM node:19
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app