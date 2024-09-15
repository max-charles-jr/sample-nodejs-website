# Use an offical Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Run the web server
CMD [ "node", "server.js" ]