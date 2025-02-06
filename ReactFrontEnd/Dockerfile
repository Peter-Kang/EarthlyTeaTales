# Dockerfile
# Pull the base image
FROM node:23-alpine3.20
# Copy app dependencies and app to container
COPY . /usr/src/app/ReactFrontEnd
# Set the working directory
WORKDIR /usr/src/app/ReactFrontEnd
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install dependencies
RUN npm i
# Deploy app for local development
EXPOSE 5173
CMD ["npm", "run", "host"]