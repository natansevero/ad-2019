FROM node:12.16.2

ENV DEV_DIR /usr/src/app

RUN mkdir -p ${DEV_DIR}
WORKDIR ${DEV_DIR}

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3333
CMD ["npm", "run", "start:dev"]