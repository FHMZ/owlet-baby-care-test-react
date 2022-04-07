# NODE 12x BASE IMAGE
FROM node:13.12.0-alpine

#WORKING DIRECTORY
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# INSTALL APP DEPENDENCIES
COPY package.json ./

RUN npm install
COPY . ./
CMD ["npm", "start"]
