FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY frontend/package*.json frontend/
RUN npm run install-frontend --only=production

COPY Backend/package*.json Backend/
RUN npm run install-backend --only=production

COPY frontend/ frontend/
RUN npm run build --prefix frontend

COPY Backend/ Backend/

USER node

CMD [ "npm", "start", "--prefix", "Backend" ]

EXPOSE 8000