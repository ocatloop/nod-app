FROM node:20.19.5-slim
WORKDIR /node-app
COPY package*.json .
RUN  npm install --only=production
COPY server.js .
CMD ["node","server.js"]
