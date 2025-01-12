FROM node:22.12.0

WORKDIR /app

# COPY package.json /app/
# COPY package-lock.json /app/

COPY . /app/

RUN npm install

# COPY . /app/

EXPOSE 3000

RUN chmod +x start-react.sh

CMD ["./start-react.sh"]

# WORKDIR /app/src

# CMD ["npm", "start"]
