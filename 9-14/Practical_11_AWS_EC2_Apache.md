# Practical 11: Create EC2 Instance and Setup Apache Webserver

## Objective
To launch a Linux instance on AWS and configure it as a web server using Apache.

## Theory
### What is Apache?
Apache HTTP Server (commonly referred to as Apache) is a free, open-source cross-platform web server software. It is one of the most popular web servers in the world and is responsible for serving website content to users over the internet.

### How does it work?
When a user types a URL (like `http://your-ec2-ip`) into their browser, the browser sends an HTTP request to the server. Apache is the software running on the server that listens for these requests (by default on Port 80 for HTTP). Once it receives a request, Apache locates the requested file (like `index.html`), reads it, and sends it back to the user's browser to be displayed.

### Key Concepts in this Practical:
- **EC2 (Elastic Compute Cloud):** A virtual server provided by AWS where we host our application.
- **Web Server:** Software (like Apache) that delivers web content to clients (browsers) over the internet.
- **Port 80 / HTTP:** The standard communication channel for unencrypted web traffic.
- **`/var/www/html/`:** The default "document root" directory for Apache on Linux. When a user visits your IP, Apache looks in this folder for the files to serve.

## Step-by-Step Procedure

### Step 1: Launch EC2 Instance
1. Log in to the [AWS Management Console](https://aws.amazon.com/console/).
2. Search for **EC2** and click on **Instances** > **Launch Instances**.
3. **Name:** MyWebserver
4. **OS Image:** Ubuntu (Free Tier eligible).
5. **Instance Type:** t2.micro.
6. **Key Pair:** Create a new key pair (e.g., `my-key.pem`) and download it.
7. **Network Settings:** Ensure "Allow HTTP traffic from the internet" is checked.
8. Click **Launch Instance**.

### Step 2: Connect to Instance
1. Select your instance and click **Connect**.
2. Choose **EC2 Instance Connect** and click **Connect**. A terminal will open in your browser.

### Step 3: Install Apache
1. Update packages: `sudo apt update -y`
2. Install Apache: `sudo apt install -y apache2`
3. Start Apache service: `sudo systemctl start apache2`
4. Enable Apache to start on boot: `sudo systemctl enable apache2`

### Step 4: Verify Installation
1. Copy the **Public IPv4 address** of your EC2 instance from the AWS console.
2. Paste the IP into your browser's address bar.
3. You should see the "Test Page" for Apache.

### Step 5: Customize Content
1. Run: `echo "<h1>Welcome to my AWS Apache Server</h1>" | sudo tee /var/www/html/index.html`
2. Refresh your browser to see the updated page.
