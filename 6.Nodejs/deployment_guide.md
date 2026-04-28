# AWS Deployment Guide: Node.js Static App

This guide explains how to deploy this application to an **AWS EC2** instance.

## Prerequisites
1. An AWS Account.
2. A GitHub repository containing this code (optional but recommended).

---

## Step 1: Launch an EC2 Instance
1. Log in to the [AWS Management Console](https://console.aws.amazon.com/).
2. Navigate to **EC2** and click **Launch Instance**.
3. Choose **Amazon Linux 2023** or **Ubuntu 22.04 LTS**.
4. Select instance type (e.g., `t2.micro` - Free Tier eligible).
5. Create or select a **Key Pair** (.pem) to SSH into the server.
6. Under **Network Settings**, ensure:
   - Allow SSH traffic (Port 22).
   - Allow HTTP traffic (Port 80).
   - Allow HTTPS traffic (Port 443).
7. Click **Launch Instance**.

---

## Step 2: Connect and Setup Server
1. Open your terminal and SSH into the instance:
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-public-ip
   ```
2. Update the system:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
3. Install Node.js (using NVM):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install --lts
   ```

---

## Step 3: Deploy the Code
1. Clone your repository OR copy the files:
   ```bash
   git clone https://your-repo-url.git
   cd your-repo-folder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Step 4: Setup Process Manager (PM2)
To keep the app running in the background:
1. Install PM2:
   ```bash
   npm install -g pm2
   ```
2. Start the application:
   ```bash
   pm2 start server.js --name "static-app"
   ```
3. Ensure it starts on reboot:
   ```bash
   pm2 startup
   pm2 save
   ```

---

## Step 5: Configure Reverse Proxy (Nginx)
By default, the app runs on port 3000. We want it on port 80 (HTTP).
1. Install Nginx:
   ```bash
   sudo apt install nginx -y
   ```
2. Configure Nginx to forward traffic to port 3000:
   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```
   Replace the `location /` block with:
   ```nginx
   location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
   }
   ```
3. Restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

---

## Your App is Live!
## Summary of Run Commands on Server
- **Run manually:** `node server.js`
- **Run with PM2 (Recommended):** `pm2 start server.js`
- **Check Status:** `pm2 status`
- **Stop App:** `pm2 stop static-app`

Access your website at `http://your-instance-public-ip`.

