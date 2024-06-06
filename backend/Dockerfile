# Dockerfile for Django backend
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /backend

# Install dependencies
COPY backend/requirements.txt /backend/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY backend /backend/

# Expose port 8000
EXPOSE 8000

# Run the server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
