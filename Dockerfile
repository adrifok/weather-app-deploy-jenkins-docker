# Use node version
FROM node:14.17.6

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port that the app will listen on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
