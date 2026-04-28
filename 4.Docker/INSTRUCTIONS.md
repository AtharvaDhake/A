# Docker Environment Setup for Java

This guide provides detailed steps to create a Docker container for a Java "Hello World" application. It covers standard Docker setup and considerations for NVIDIA Docker (GPU-enabled).

## Prerequisites
- **Docker Desktop** installed (Windows/Mac) or **Docker Engine** (Linux).
- (Optional) **NVIDIA Container Toolkit** if using NVIDIA Docker for GPU support.

---

## 1. Standard Docker Setup (Recommended for Java)

### Step 1: Create the Project Files
Ensure you have the following files in your directory:
- `HelloWorld.java`: The Java source code.
- `Dockerfile`: Instructions for building the container image.

### Step 2: Build the Docker Image
Open your terminal or PowerShell in the project directory and run:
```powershell
docker build -t java-hello-world .
```
- `-t java-hello-world`: Tags the image with a name.
- `.`: Specifies the current directory as the build context.

### Step 3: Run the Docker Container
Once the build is finished, run the container:
```powershell
docker run java-hello-world
```
**Output:** `Hello, World from Docker!`

---

## 2. NVIDIA Docker (GPU) Setup

If your application requires GPU acceleration (e.g., for Deep Learning with Java libraries like DL4J), you need the **NVIDIA Container Toolkit**.

### Step 1: Requirements
- A machine with an NVIDIA GPU.
- [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) installed and configured.

### Step 2: Use a GPU-Enabled Base Image
Modify your `Dockerfile` to use an NVIDIA CUDA base image and install Java manually.

Example snippet for `Dockerfile` (GPU version):
```dockerfile
FROM nvidia/cuda:12.2.0-base-ubuntu22.04

# Install OpenJDK
RUN apt-get update && apt-get install -y openjdk-17-jdk-headless

WORKDIR /app
COPY HelloWorld.java .
RUN javac HelloWorld.java
CMD ["java", "HelloWorld"]
```

### Step 3: Run with GPU Support
When running the container, use the `--gpus all` flag:
```powershell
docker run --gpus all java-hello-world-gpu
```

---

## 3. Useful Docker Commands
- **List Images:** `docker images`
- **List Running Containers:** `docker ps`
- **Remove Image:** `docker rmi java-hello-world`
- **Stop Container:** `docker stop <container_id>`
