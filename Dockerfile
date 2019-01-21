# Import NodeJS image
FROM node:8

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

#Bundle app source
COPY . .

# Map to app binded port number
EXPOSE 8080

# Run a command with arguments
CMD ["npm", "start"]