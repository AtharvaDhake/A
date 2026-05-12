# Practical 14: Develop custom Application using Salesforce Cloud (Rental Management)

## Objective
The main objective of this project is to manage rental property details and tenant information in a simple and organized way using Salesforce.

## Step-by-Step Procedure

### Step 1: Login and Initial Setup
1. Log in to your Salesforce Developer Edition.
2. Click the **Gear Icon** (top right) and select **Setup**.
3. In the **Quick Find** box (left side), type "Object Manager" or click the **Object Manager** tab at the top.

---

### Step 2: Create Custom Object "Property" (API Name: Property__c)
1. In Object Manager, click **Create** > **Custom Object**.
2. **Label:** Property
3. **Plural Label:** Properties
4. **Object Name:** Property
5. **Record Name:** Property Name (Data Type: Text)
6. Under **Optional Features**, check:
   - [x] Allow Reports
   - [x] Allow Activities
   - [x] Track Field History
7. Click **Save**.

#### Add Fields to Property Object:
Go to **Fields & Relationships** and click **New** for each field:
1. **Property ID**:
   - Type: **Auto Number**
   - Field Label: Property ID
   - Display Format: `PROP-{0000}`
   - Starting Number: `1`
2. **Property Type**:
   - Type: **Picklist**
   - Field Label: Property Type
   - Values (Enter manually): `House`, `Flat`, `Studio`, `Commercial`
3. **Address**:
   - Type: **Text Area**
   - Field Label: Address
4. **Rent Amount**:
   - Type: **Currency**
   - Field Label: Rent Amount
5. **Status**:
   - Type: **Picklist**
   - Field Label: Status
   - Values: `Available`, `Rented`

---

### Step 3: Create Custom Object "Tenant" (API Name: Tenant__c)
1. In Object Manager, click **Create** > **Custom Object**.
2. **Label:** Tenant
3. **Plural Label:** Tenants
4. **Object Name:** Tenant
5. **Record Name:** Tenant Name (Data Type: Text)
6. Under **Optional Features**, check:
   - [x] Allow Reports
   - [x] Allow Activities
   - [x] Track Field History
7. Click **Save**.

#### Add Fields to Tenant Object:
Go to **Fields & Relationships** and click **New** for each field:
1. **Tenant ID**:
   - Type: **Auto Number**
   - Field Label: Tenant ID
   - Display Format: `TEN-{0000}`
   - Starting Number: `1`
2. **Phone Number**:
   - Type: **Phone**
   - Field Label: Phone Number
3. **Email**:
   - Type: **Email**
   - Field Label: Email
4. **Move In Date**:
   - Type: **Date**
   - Field Label: Move In Date

---

### Step 4: Create 1:Many Relationship (Lookup)
*This allows one property to have multiple tenants.*
1. In the **Tenant** object, go to **Fields & Relationships** and click **New**.
2. Select **Lookup Relationship** and click **Next**.
3. **Related To**:
   - Select **Property** from the dropdown.
   - Click **Next**.
4. **Field Details**:
   - Field Label: Property
   - Field Name: Property
   - Click **Next**.
5. **Field-Level Security**:
   - Leave defaults and click **Next**.
6. **Page Layouts**:
   - Leave defaults and click **Next**.
7. **Related Lists**:
   - Leave defaults and click **Save**.

---

### Step 5: Creating Reports (Detailed)
1. Click the **App Launcher** (9 dots icon) and search for **Reports**.
2. Click **New Report**.
3. Select **Properties** as the report type (you may need to search for it).
4. **Available Properties Report**:
   - Go to the **Filters** tab.
   - Click **Add Filter** > Select **Status**.
   - Operator: `equals` | Value: `Available`.
   - Click **Apply**.
   - Click **Save & Run**. Name it "Available Properties Report".
5. **Rented Properties Report**:
   - Click **New Report** from the Reports tab.
   - Select **Properties** as the report type.
   - Go to the **Filters** tab.
   - Click **Add Filter** > Select **Status**.
   - Operator: `equals` | Value: `Rented`.
   - Click **Apply**.
   - Click **Save & Run**. Name it "Rented Properties Report".
6. **Tenant Details Report**:
   - Click **New Report** from the Reports tab.
   - Select **Tenants** as the report type.
   - (Optional) Add fields like Tenant ID, Name, Phone Number, and Property to the Outline.
   - Click **Save & Run**. Name it "Tenant Details Report".

---

### Step 6: Creating Dashboard Components
1. Click **App Launcher** > **Dashboards**.
2. Click **New Dashboard**, name it **Rental Management Dashboard**, and click **Create**.
3. **Total Properties Component**:
   - Click **+ Component**.
   - Select your "Available Properties Report" (or a general properties report).
   - Select the **Metric Chart** type (displays a single large number).
   - Click **Add**.
4. **Available Houses Component**:
   - Click **+ Component**.
   - Select your "Available Properties Report".
   - Select the **Gauge Chart** type.
   - Click **Add**.
5. **Occupied Houses Component**:
   - Click **+ Component**.
   - Select your "Rented Properties Report".
   - Select the **Pie Chart** type.
   - Click **Add**.
6. Click **Save** and then **Done**.

---

### Step 7: Final App Creation
1. Go to **Setup** > in the Quick Find box, search for and click on **App Manager**.
2. Click **New Lightning App** (top right).
3. **App Details & Branding**:
   - App Name: `Rental Management System`
   - Click **Next**.
4. **App Options**: Leave as default and click **Next**.
5. **Utility Items**: Leave as default and click **Next**.
6. **Navigation Items**:
   - Search for and add the following to "Selected Items":
     - **Properties**
     - **Tenants**
     - **Reports**
     - **Dashboards**
   - Click **Next**.
7. **User Profiles**:
   - Search for **System Administrator** and add it to "Selected Profiles".
   - Click **Save & Finish**.

---

### How to use your App:
1. Open the **App Launcher** and find **Rental Management System**.
2. Go to **Properties** and click **New** to add a house.
3. Go to **Tenants** and click **New** to add a person, and **link them to a Property** using the lookup field you created.
