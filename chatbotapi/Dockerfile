# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Run locally
# CMD ["python", "chatbot_api.py"]

# Run the application with Gunicorn(port 8080)
# CMD ["gunicorn", "-b", "0.0.0.0:8080", "chatbot_api:app"]

# Run the application with Gunicorn
CMD ["gunicorn", "chatbot_api:app"]



