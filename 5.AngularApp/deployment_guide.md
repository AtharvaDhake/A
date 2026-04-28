# Google Cloud App Engine Deployment Guide: Angular App

This guide explains how to deploy your Angular application to **Google Cloud App Engine**. App Engine is a fully managed, serverless platform that easily hosts static web applications.

## Prerequisites
1. A **Google Cloud Platform (GCP)** account.
2. The **Google Cloud SDK** (gcloud CLI) installed on your machine.
3. Node.js and npm installed to build your Angular app.

---

## Step 1: Install and Initialize Google Cloud SDK
1. Download and install the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) for your operating system.
2. Open your terminal and log in to your Google Cloud account:
   ```bash
   gcloud auth login
   ```
3. Initialize the SDK and set up a new or existing project:
   ```bash
   gcloud init
   ```
   *Follow the interactive prompts to select your project and preferred compute region.*

---

## Step 2: Prepare the Angular Application
1. Open a terminal in the root directory of your Angular app (`5.AngularApp`).
2. Ensure all dependencies are installed:
   ```bash
   npm install
   ```
3. Build the application for production. This generates the optimized static files in the `dist/my-app` folder:
   ```bash
   npm run build
   ```

---

## Step 3: Review the `app.yaml` Configuration
The application requires an `app.yaml` file in the root directory to tell Google App Engine how to serve the files. 

Ensure the file `app.yaml` exists in `5.AngularApp` with the following content:
```yaml
runtime: python39

handlers:
  # Serve static files for the Angular app
  - url: /(.*\.(js|css|png|jpg|ico|woff|woff2|ttf|svg))$
    static_files: dist/my-app/browser/\1
    upload: dist/my-app/browser/.*\.(js|css|png|jpg|ico|woff|woff2|ttf|svg)$

  # Serve index.html for all other routes to support Angular routing
  - url: /.*
    static_files: dist/my-app/browser/index.html
    upload: dist/my-app/browser/index.html
```

---

## Step 4: Deploy to App Engine
1. In your terminal, ensure you are still in the `5.AngularApp` root directory (where the `app.yaml` is located).
2. Run the deploy command:
   ```bash
   gcloud app deploy
   ```
3. You will be prompted to confirm the details. Type `Y` and press `Enter`.
4. The CLI will upload your files and configure the service. This may take a few minutes.

---

## Step 5: View Your Live Application
Once the deployment finishes successfully, the CLI will provide a URL to your live application. 
You can instantly open it in your default web browser by running:
```bash
gcloud app browse
```

## Summary of Useful Commands
- **Deploy Updates:** `gcloud app deploy` (Run this whenever you make changes and run `npm run build`).
- **View Live App:** `gcloud app browse`
- **View Server Logs:** `gcloud app logs tail`
