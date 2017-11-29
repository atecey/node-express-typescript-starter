FROM node:9.1-alpine

# prepare a user which runs everything locally! - required in child images!
RUN adduser -D app

ENV HOME=/home/app
WORKDIR $HOME

ENV APP_NAME=node-express-typescript-starter

# before switching to user we need to set permission properly
# copy all files, except the ignored files from .dockerignore
COPY ./package.json $HOME/$APP_NAME/
COPY ./dist $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/$APP_NAME

RUN npm install
RUN npm prune --production
CMD ["node", "server.js"]

EXPOSE 3000
