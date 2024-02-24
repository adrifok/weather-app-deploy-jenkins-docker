Deploying my weather app application with Jenkins and Docker
Introduction:
In this project, I utilized Jenkins and Docker to automate the deployment process of my application. As you could see the first deploy was made through vercel,
then I developed the entire pipeline to output to the outside into a docker container. 
This streamlined approach ensures consistency, reliability, and efficiency in deploying the application across different environments.

Steps Taken:
Setting up Jenkins and Docker:

I provisioned an EC2 instance on AWS and installed Jenkins and Docker on it. Jenkins serves as the automation server, while Docker facilitates containerization and deployment.
Creating a Jenkins Pipeline:

I configured a Jenkins pipeline to automate the build (I added to the repo as a .txt), test, and deployment stages of my application. The pipeline is defined using a Jenkinsfile stored in my project's repository.
Integration with Git Repository:

I connected Jenkins to my Git repository, enabling it to automatically trigger pipeline execution whenever changes are pushed to the repository.
Building the Docker Image:

The Jenkins pipeline includes a stage to build the Docker image of my application. This stage uses the Dockerfile present in the project repository to build the image.
Pushing the Docker Image to Docker Hub:

After building the Docker image, the pipeline pushes the image to Docker Hub. This makes the image accessible for deployment to various environments.
Deploying the Application:

Finally, the pipeline deploys the application by running a Docker container based on the latest image pushed to Docker Hub. The container is deployed on the target environment, ensuring that the application is up and running.
Benefits:
Automation: By leveraging Jenkins and Docker, I automated the entire deployment process, reducing manual intervention and minimizing the risk of errors.

Consistency: The deployment process is standardized across environments, ensuring consistency in application deployment.

Scalability: The Dockerized application can be easily scaled up or down based on demand, providing flexibility and scalability.

Version Control: With Git integration, changes to the application code are version-controlled, allowing for easy rollback and collaboration among team members.

Conclusion:
Deploying applications with Jenkins and Docker offers numerous benefits in terms of automation, consistency, and scalability. By following this approach, I achieved efficient and reliable application deployment, enabling faster delivery of features and updates to end-users.
