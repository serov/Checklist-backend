# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the app source code to the working directory
COPY . .

# Expose the port the app will run on
EXPOSE 5002

# Start the app
CMD ["node", "server.js"]
