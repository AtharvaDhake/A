# Practical 10: Transfer Files Between Virtual Machines

## Objective
To demonstrate various procedures for transferring files from one virtual machine (VM) to another.

## Procedure 1: Using SCP (Secure Copy Protocol) - Best for Linux VMs
This is the most common method for command-line file transfer.

1. **On Source VM:** Open the terminal.
2. Use the following command syntax:
   `scp /path/to/local/file username@destination_ip:/path/to/destination/folder`
3. **Example:** `scp test.txt admin@192.168.1.50:/home/admin/`
4. Enter the password for the destination VM when prompted.

## Procedure 2: Using WinSCP / FileZilla (GUI) - Best for Windows to Linux
1. Install **WinSCP** or **FileZilla** on your Windows VM.
2. Open the application and choose **SFTP** as the protocol.
3. Enter the **Host Name** (IP Address of the destination VM), **Username**, and **Password**.
4. Click **Connect**.
5. You will see a split-screen. Simply drag and drop files from the left (source) to the right (destination).

## Procedure 3: Using Shared Folders (VirtualBox/VMware)
1. In the VM settings (e.g., VirtualBox), go to **Shared Folders**.
2. Add a folder from your host machine.
3. Enable **Auto-mount** and **Make Permanent**.
4. Both VMs can now access this shared folder if they are configured to point to the same host directory.

## Procedure 4: Using RDP (Remote Desktop) - Best for Windows VMs
1. Connect from VM-A to VM-B using **Remote Desktop Connection**.
2. Before clicking connect, go to **Show Options** > **Local Resources** > **More**.
3. Select the **Drives** you want to share.
4. Once connected, you can copy files from your local drive and paste them directly into the remote VM's folder.
