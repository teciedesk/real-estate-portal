FROM node:18

WORKDIR /app

COPY server ./server
COPY client ./client

RUN cd server && npm install

EXPOSE 3000

CMD ["node", "server/server.js"]
