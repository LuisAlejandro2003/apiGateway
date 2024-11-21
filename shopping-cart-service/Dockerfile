# Dockerfile for Shopping Cart Service
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port (cambiar según el puerto de Shopping Cart, si es diferente)
EXPOSE 3002

# Run the application
CMD ["npm", "run", "start"]
