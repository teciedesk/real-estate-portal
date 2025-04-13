# Use Nginx to serve static content
FROM nginx:alpine

# Remove default static files in nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy your client files into the nginx html directory
COPY client/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
