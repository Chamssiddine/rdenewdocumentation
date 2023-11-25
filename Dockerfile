# BASE OS
FROM node:16-alpine3.18 

# Create app directory
WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app
EXPOSE 3000

CMD ["npm", "start"]