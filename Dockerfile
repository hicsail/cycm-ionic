FROM node:18-alpine as build

WORKDIR /app

COPY . .

ARG VITE_ELEVEN_LABS_API_KEY
ARG VITE_STRAPY_TOKEN
ARG VITE_STRAPI_URL

ENV VITE_ELEVEN_LABS_API_KEY=${VITE_ELEVEN_LABS_API_KEY}
ENV VITE_STRAPY_TOKEN=${VITE_STRAPY_TOKEN}
ENV VITE_STRAPI_URL=${VITE_STRAPI_URL}

RUN npm install
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

CMD nginx -g 'daemon off;'