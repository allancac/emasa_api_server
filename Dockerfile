FROM node:18.17.1-alpine3.17

RUN mkdir -p /home/api_emasa	

WORKDIR /home/api_emasa

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 5500

CMD ["npm", "run", "dev"]