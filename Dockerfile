FROM node:16.5-alpine

WORKDIR /app

COPY package*.json /app

RUN npm i

COPY . .

EXPOSE 3030

CMD ["npm", "run", "dev"]