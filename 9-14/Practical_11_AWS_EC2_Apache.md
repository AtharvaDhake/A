# Practical 11: Create EC2 Instance and Setup Apache Webserver

## Objective
To launch a Linux instance on AWS and configure it as a web server using Apache.

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
