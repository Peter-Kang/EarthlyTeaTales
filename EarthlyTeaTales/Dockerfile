# Dockerfile
# Pull the base image
FROM node:19-alpine3.17
# Copy app dependencies and app to container
COPY . /usr/src/app/EarthlyTeaTales
# Set the working directory
WORKDIR /usr/src/app/EarthlyTeaTales
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install dependencies
RUN npm i
# Deploy app for local development
EXPOSE 5173
CMD ["npm", "run", "host"]