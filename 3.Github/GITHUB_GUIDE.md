# GitHub Setup & Deployment Guide

This guide provides step-by-step instructions for creating a GitHub account, setting up a repository, and pushing your web application code using Git commands.

## Phase 1: Create a GitHub Account

1.  **Visit GitHub**: Go to [github.com](https://github.com/).
2.  **Sign Up**: Click the **"Sign up"** button in the top-right corner.
3.  **Enter Details**: Provide your email, create a strong password, and choose a unique username.
4.  **Verify**: Complete the CAPTCHA and verify your email address via the link sent to your inbox.
5.  **Personalize**: Follow the onboarding prompts or skip to go straight to your dashboard.

---

## Phase 2: Create a New Repository

1.  **New Repo**: On your GitHub home page, click the **"+"** icon (top-right) and select **"New repository"**.
2.  **Repository Name**: Name it (e.g., `modern-portfolio`).
3.  **Visibility**: Choose **Public** or **Private**.
4.  **Initialize**: Do **NOT** check "Initialize this repository with a README" (since we are pushing existing code).
5.  **Create**: Click **"Create repository"**.
6.  **Save URL**: Copy the repository URL (it looks like `https://github.com/your-username/modern-portfolio.git`).

---

## Phase 3: Push Code Using Git Commands

Open your terminal (Command Prompt, PowerShell, or Git Bash) in your project folder and run these commands:

### 1. Initialize Git
This creates a hidden `.git` folder to track changes.
```bash
git init
```

### 2. Add Files
Stage all files for the first commit.
```bash
git add .
```

### 3. Commit Changes
Create a snapshot of your code with a message.
```bash
git commit -m "Initial commit: Modern Glassmorphism Portfolio"
```

### 4. Branch Rename (Optional but recommended)
GitHub defaults to `main` as the primary branch.
```bash
git branch -M main
```

### 5. Link to Remote Repository
Replace `[YOUR_URL]` with the URL you copied in Phase 2.
```bash
git remote add origin [YOUR_URL]
```

### 6. Push to GitHub
Upload your code to the cloud.
```bash
git push -u origin main
```

---

## Phase 4: Configure Authentication (If needed)

If this is your first time, Git might ask for credentials:
- **Username**: Your GitHub username.
- **Password**: Use a **Personal Access Token (PAT)** instead of your account password.
    - Go to: Settings > Developer settings > Personal access tokens > Tokens (classic).
    - Generate a new token with `repo` permissions.

---

## Troubleshooting Tips
- **Check Status**: Use `git status` to see which files are staged or modified.
- **Log**: Use `git log --oneline` to see your commit history.
- **Remote**: Use `git remote -v` to check the linked repository URL.
