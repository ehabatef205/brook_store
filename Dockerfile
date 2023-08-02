FROM node:14.19.3

WORKDIR /React_brook_store

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3050

CMD ["npm","run","start"]