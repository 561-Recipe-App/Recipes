# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package.json package-lock.json* /app/

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . /app/

# Build the Next.js app for production
#RUN npm run build

# Expose the port that the Next.js app will run on
#EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]
