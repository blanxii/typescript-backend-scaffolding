FROM node:lts-alpine as production

# Copy all content
COPY ./app /opt

WORKDIR /opt/app

RUN npm install --production

RUN npm run build

ENTRYPOINT ["npm", "start"]

FROM production as development

RUN npm install -g nodemon

RUN npm install

ENTRYPOINT ["npm", "run", "develop"]
