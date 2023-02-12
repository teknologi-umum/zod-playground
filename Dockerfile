FROM nginx:1.23.1-alpine

COPY . /usr/share/nginx/html/

ENV NGINX_PORT=80