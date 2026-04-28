# Vagrant Setup Guide: Running your AJAX App on Ubuntu 22.04

Here is a complete, detailed step-by-step guide to get your code running and displayed using your Ubuntu 22.04 Vagrant machine from scratch. 

## Step 1: Configure your Vagrantfile
To view the output on your Windows host machine while the files are hosted on your Vagrant Ubuntu machine, we need to make sure Vagrant is sharing your project folder and forwarding the network port.

1. Open your terminal or Command Prompt on Windows.
2. Navigate to the directory where your `Vagrantfile` is located (where you initialized your Vagrant machine).
3. Open the `Vagrantfile` in any text editor (like Notepad or VS Code) and ensure you have these two settings enabled/uncommented:

**A. Port Forwarding**
Find the line that looks like this and remove the `#` at the beginning to uncomment it:
```ruby
config.vm.network "forwarded_port", guest: 8000, host: 8000
```
*(This tells Vagrant: "Any traffic that hits port 8000 on my Windows machine should be sent to port 8000 on my Ubuntu VM")*

**B. Synced Folder**
By default, Vagrant automatically syncs the folder where your `Vagrantfile` is located to the `/vagrant` directory inside your Ubuntu machine. 

*(Optional)* If your `2.AJAX` folder is located somewhere else, you can explicitly map it by adding this line:
```ruby
config.vm.synced_folder "C:/Users/athar/OneDrive/Desktop/2.AJAX", "/var/www/ajax"
```
*(If you do this, you will navigate to `/var/www/ajax` in Step 4 instead of `/vagrant`)*

## Step 2: Start and Reload the Vagrant Machine
Since you modified the `Vagrantfile`, you need to reload the machine to apply the port forwarding and folder syncing rules.

In your Windows terminal (in the folder where your Vagrantfile is), run:
```bash
vagrant reload
```
*(If your machine is currently off, you can just run `vagrant up`)*

## Step 3: SSH into the Ubuntu Machine
Once the machine is running, connect to it via SSH:
```bash
vagrant ssh
```
Your terminal prompt should now change to something like `vagrant@ubuntu2204:~$`. You are now inside your Ubuntu VM.

## Step 4: Navigate to your Synced Folder
Move into the directory where your HTML/JS/CSS files are synced. 
If you used the default sync, it will be the `/vagrant` directory:
```bash
cd /vagrant
```
*(Note: If you explicitly mapped the `2.AJAX` folder in Step 1, type `cd /var/www/ajax` instead).*

You can type `ls` to verify your files (`index.html`, `script.js`, `style.css`, etc.) are present.

## Step 5: Start the Web Server
Ubuntu 22.04 comes with Python 3 pre-installed, which has a very handy built-in web server. 

Start the server on port 8000 by running this command:
```bash
python3 -m http.server 8000
```
You should see an output that looks like: 
`Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...`
*(Leave this terminal window open. If you close it or press `Ctrl + C`, the server will stop).*

## Step 6: View the Output on your Windows Browser
Now that the server is running on the Ubuntu machine and port 8000 is forwarded to Windows:

1. Open a web browser (Chrome, Edge, etc.) on your Windows machine.
2. In the URL bar, type: 
   `http://localhost:8000`
3. Hit Enter.

You will immediately see your newly styled Registration Form! 

**How to test your app:**
- Type in a name and email, and hit **Register**.
- Because of our code, it will simulate an AJAX POST request, save your data to your browser's local storage, and automatically redirect you to `http://localhost:8000/list.html` where you'll see your newly submitted data displayed in the card.
