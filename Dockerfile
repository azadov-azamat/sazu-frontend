# Use the official Node.js image as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all files and install dependencies in one step
COPY . .

# Set environment variable (if needed, better to use ARG and ENV)
RUN echo "VITE_BACKEND_HOST=https://back.sazumedia.com" > .env

# Increase memory limit for build
RUN node --max-old-space-size=2048 /usr/local/bin/npm ci

# Build the React application
RUN npm run build

# Install a simple HTTP server to serve the build
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the server to serve the React app
CMD ["serve", "-s", "dist", "-l", "3000"]
