# Practical 13: Design and Develop Custom Application using Salesforce Cloud

## Objective
To understand the Salesforce Lightning interface by designing and developing a custom "Student Management" application.

## Step-by-Step Procedure

### Step 1: Sign Up for a Salesforce Developer Org
1. Open your browser and go to [developer.salesforce.com/signup](https://developer.salesforce.com/signup).
2. Enter your Name, Email, and a unique **Username** (must be in email format, e.g., `yourname@practice.com`).
3. Click **Sign me up**.
4. Check your email, click **Verify Account**, and set your password.

---

### Step 2: Create a Custom Object "Student"
1. Log in to Salesforce. You will be on the **Setup** home page.
2. Click the **Object Manager** tab (next to Home).
3. Click the **Create** button on the right and select **Custom Object**.
4. Enter the following:
   - **Label:** `Student`
   - **Plural Label:** `Students`
   - **Object Name:** `Student` (Auto-filled)
   - **Record Name:** `Student Name` (Data Type: **Text**)
5. Under **Deployment Status**, ensure **Deployed** is selected.
6. Click **Save**.

---

### Step 3: Add Custom Fields to Student Object
1. After saving, you will be in the **Student** object settings. Click **Fields & Relationships** from the left sidebar.
2. Click **New**.
3. **Add Department Field**:
   - Select **Text** > Click **Next**.
   - Field Label: `Department`
   - Length: `50`
   - Click **Next** > **Next** > **Save & New**.
4. **Add Student Email Field**:
   - Select **Email** > Click **Next**.
   - Field Label: `Student Email`
   - Click **Next** > **Next** > **Save**.

---

### Step 4: Create the Custom Application (Lightning App)
1. Click the **Home** tab in Setup.
2. In the **Quick Find** box, type "App Manager" and click on it.
3. Click **New Lightning App** (top right).
4. **App Details & Branding**:
   - App Name: `MyCollegeApp`
   - Developer Name: `MyCollegeApp` (Auto-filled)
   - Description: `App to manage college student records.`
   - Click **Next**.
5. **App Options**: Leave as default and click **Next**.
6. **Service Setup**: Leave as default and click **Next**.
7. **Navigation Items**:
   - Find **Students** in the "Available Items" list.
   - Click the **Right Arrow** to move it to "Selected Items".
   - Click **Next**.
8. **User Profiles**:
   - Find **System Administrator** in the "Available Profiles" list.
   - Click the **Right Arrow** to move it to "Selected Profiles".
   - Click **Save & Finish**.

---

### Step 5: Test and Verify your Application
1. Click the **App Launcher** (the icon with 9 dots in the top left corner).
2. Search for `MyCollegeApp` and click it.
3. You will see the **Students** tab. Click it.
4. Click the **New** button.
5. Enter a Student Name, Department, and Email.
6. Click **Save**. 
7. You have successfully created a custom Salesforce application and your first record!
