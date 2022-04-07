FROM node:lts-alpine

# Add a work directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Cache and Install dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn
# Copy app files
COPY . ./
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]
