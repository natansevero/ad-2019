FROM node:12.16.2

ENV DEV_DIR /usr/src/app

RUN mkdir -p ${DEV_DIR}
WORKDIR ${DEV_DIR}

COPY package*.json ./

RUN npm install --silent

COPY ./ ./

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:docker"]