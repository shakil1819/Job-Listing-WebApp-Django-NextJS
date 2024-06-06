# Dockerfile for Next.js frontend
FROM node:20

# Set working directory
WORKDIR /frontend

# Install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy project files
COPY frontend /frontend/

# Expose port 3000
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
