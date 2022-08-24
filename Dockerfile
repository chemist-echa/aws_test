FROM node:16.17.0 as builder
RUN mkdir /app-admin
WORKDIR /app-admin
COPY . .

RUN yarn install

EXPOSE 3000
CMD [ "yarn", "dev" ]
