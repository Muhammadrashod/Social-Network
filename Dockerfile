FROM node:20.10 

WORKDIR /socialnewtwork

COPY . /socialnewtwork

EXPOSE 3000 

RUN npm i

CMD ["npm", "start"]