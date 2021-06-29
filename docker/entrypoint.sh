#!/bin/bash


cd /home/node/app
npm install
cd /home/node/app/user
npm install 
npm run start:dev
cd /home/node/app/user-service
npm install 
npm run start:dev