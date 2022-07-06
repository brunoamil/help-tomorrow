FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.0
COPY --from=node /app/dist/help-tomorrow /usr/share/nginx/html

EXPOSE 8282
