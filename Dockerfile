FROM node:16

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 3001

WORKDIR /app/src

CMD ["npm", "start"]
