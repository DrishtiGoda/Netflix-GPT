# Step 1: Use a node.js base image
FROM node:14

# Set environment variables
ARG TMDB_API_KEY
ENV REACT_APP_TMDB_API_KEY=$TMDB_API_KEY

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4:Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the react app
RUN npm run build 

# Step 7: Use a minimal server image to serve the built React app
FROM nginx:stable-alpine

# Step 8: Copy the build output to the Nginx server directory
COPY --from=0 /app/build /usr/share/nginx/html

#Step 9: Expose port 80
EXPOSE 80

# Step 10: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
