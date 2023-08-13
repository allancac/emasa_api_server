FROM node:18.17.1-alpine3.17

RUN mkdir -p /home/api_emasa	

COPY . /home/api_emasa

WORKDIR /home/api_emasa

CMD ["yarn" , "dev"]