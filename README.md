# Node express typescript starter
This is a starter project using nodejs, express and typescript.  It will allow you to quickly get started. It currently also reads data from json files allowing it to be used as a fully
customisable mock server.
 
## Install Nodejs on your machine

Install [Nodejs](https://nodejs.org/en/download/).

## Install dependencies

    npm install

## Run express server

    npm start
    
## Run tslint

    npm run tslint
    
## Build dist for production

    npm run build
    
## Run tests
TODO

## Create Docker container.
Build the app first then run the below command form the root directory of this project

    docker build -f ./.docker/Dockerfile -t express-starter .
