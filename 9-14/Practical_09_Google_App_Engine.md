# Practical 09: Install Google App Engine and Create Hello World App

## Objective
To install the Google Cloud SDK, set up a project, and deploy a simple "Hello World" web application using Python.

## Prerequisites
- A Google Account.
- Python installed on your local machine.

## Step-by-Step Procedure

### Step 1: Install Google Cloud SDK
1. Go to the [Google Cloud SDK installation page](https://cloud.google.com/sdk/docs/install).
2. Download the installer for Windows.
3. Run the installer and follow the prompts. Ensure "Bundled Python" and "Cloud Tools for PowerShell" are selected.
4. After installation, a terminal will open. Run `gcloud init`.
5. Log in with your Google account when prompted in the browser.

### Step 2: Create a Project in GCP
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the project selector (top left) and click **New Project**.
3. **Project Name:** `my-first-app-914`.
4. Click **Create**. Note down the **Project ID**.
5. Back in your local terminal, run: `gcloud config set project [YOUR_PROJECT_ID]`.

### Step 3: Create the Application Directory
1. Create a new folder on your computer named `hello-appengine`.
2. Open this folder in your code editor (e.g., VS Code).

### Step 4: Create the Application Files
Create these three files inside your folder:

**1. `main.py`**:
```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World! My App Engine project is running."

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)
```

**2. `app.yaml`**:
```yaml
runtime: python39
```

**3. `requirements.txt`**:
```text
Flask==2.0.1
gunicorn==20.1.0
```

### Step 5: Test Locally
1. In your terminal: `python -m venv venv`
2. Activate: `.\venv\Scripts\activate`
3. Install: `pip install -r requirements.txt`
4. Run: `python main.py`
5. Open `http://localhost:8080` to see your app.

### Step 6: Deploy to Google App Engine
1. In the terminal, run: `gcloud app create` (Select a region like `us-central`).
2. Run: `gcloud app deploy`
3. Enter `y` to confirm.
4. Once finished, run: `gcloud app browse` to view your live website on the internet.
