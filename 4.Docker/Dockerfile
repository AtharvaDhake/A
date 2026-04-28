# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Java source file into the container
COPY HelloWorld.java .

# Compile the Java program
RUN javac HelloWorld.java

# Run the program when the container starts
CMD ["java", "HelloWorld"]
