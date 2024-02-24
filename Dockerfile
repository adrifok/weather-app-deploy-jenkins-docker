# Use node version
FROM node:14.17.6

# Copy the src folder into the Tomcat webapps directory
COPY /weather-app-deploy-vercel/src /usr/local/tomcat/webapps/weatherapp.war

# Expose the port that Tomcat will use (8080 by default)
EXPOSE 8080

# The default command to run when starting the container will start Tomcat
CMD ["npm", "start"]