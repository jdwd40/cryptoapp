# Use the official Node.js 18.2 image based on Alpine Linux
FROM node:18.2.0

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production-ready code
RUN npm run build

# Set the command to start the application
CMD ["npm", "start"]
