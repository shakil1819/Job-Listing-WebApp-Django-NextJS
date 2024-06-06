# Dockerfile for Next.js frontend
FROM node:16-alpine

# Set working directory
WORKDIR /frontend

# Copy package.json and package-lock.json first to leverage Docker cache
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies
RUN npm install
RUN npm run build

# Copy all frontend files
COPY frontend /frontend/

# Expose port 3000
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
