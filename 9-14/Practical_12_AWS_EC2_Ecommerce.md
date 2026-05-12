# Practical 12: Deploy Ecommerce Website on AWS EC2 (Ubuntu)

## Objective
To deploy a static ecommerce website on an Ubuntu EC2 instance using a template from `freewebsitetemplates.com`.

## Step-by-Step Procedure

### Step 1: Launch Ubuntu Instance
1. Log in to **AWS Console** > **EC2** > **Launch Instance**.
2. **Name:** `EcommerceServer`
3. **OS Image:** Select **Ubuntu Server 24.04 LTS** (or 22.04) - Ensure it is "Free Tier eligible".
4. **Instance Type:** `t2.micro`.
5. **Key Pair:** Select your existing key pair or create a new one.
6. **Network Settings**:
   - Click **Edit**.
   - Ensure "Auto-assign public IP" is **Enabled**.
   - Check **Allow SSH traffic** (Port 22).
   - Check **Allow HTTP traffic from the internet** (Port 80).
7. Click **Launch Instance**.

### Step 2: Connect and Install Web Server
1. Select your instance and click **Connect**. Use **EC2 Instance Connect** for a browser-based terminal.
2. Update the system:
   ```bash
   sudo apt update -y
   ```
3. Install Apache and Unzip:
   ```bash
   sudo apt install apache2 unzip -y
   ```

### Step 3: Download and Deploy Ecommerce Template
1. Move to the web directory:
   ```bash
   cd /var/www/html
   ```
2. Remove the default index file:
   ```bash
   sudo rm index.html
   ```
3. Download the template (using a verified link):
   ```bash
   sudo wget https://freewebsitetemplates.com/download/space-science.zip
   ```
4. Unzip the downloaded file:
   ```bash
   sudo unzip space-science.zip
   ```
5. Move the files from the unzipped folder to the current directory:
   *Note: Check the folder name first using `ls`. For this template, the actual website files are inside an `upload` subfolder, so run:*
   ```bash
   sudo mv space-science/upload/* .
   ```
6. (Optional) Set correct permissions:
   ```bash
   sudo chown -R www-data:www-data /var/www/html
   ```

### Step 4: Test the Live Website
1. Go back to the AWS EC2 Dashboard.
2. Copy the **Public IPv4 address** of your instance.
3. Open a new tab in your browser and paste the IP address.
4. You should see the fully functional "Space Science" ecommerce/business template running on your server.
