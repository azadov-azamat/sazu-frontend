# Use the official Node.js image as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
RUN touch .env
RUN echo "VITE_BACKEND_HOST=https://back.sazumedia.com" > .env
# Build the React application
RUN npm run build

# Install a simple HTTP server to serve the build
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the server to serve the React app
CMD ["serve", "-s", "dist", "-l", "3000"]
