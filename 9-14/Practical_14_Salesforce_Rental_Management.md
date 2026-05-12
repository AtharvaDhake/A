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
1. In the **Tenant** object, go to **Fields & Relationships** > **New**.
2. Select **Lookup Relationship** and click **Next**.
3. Related To: Select **Property** from the dropdown.
4. Field Label: **Property** | Field Name: `Property`.
5. Click **Next** through the visibility and page layout screens, then click **Save**.

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
   - Repeat the steps but filter where **Status** equals `Rented`.
6. **Tenant Details Report**:
   - Create a new report using **Tenants** as the report type.

---

### Step 6: Creating Dashboard Components
1. Click **App Launcher** > **Dashboards**.
2. Click **New Dashboard**. Name: **Rental Management Dashboard**.
3. Click **+ Component**:
   - **Total Properties**: Use the Properties report and select the "Metric Chart" (big number).
   - **Available Houses**: Use the "Available Properties Report" and select a "Gauge Chart".
   - **Occupied Houses**: Use the "Rented Properties Report" and select a "Pie Chart".
4. Click **Save** and then **Done**.

---

### Step 7: Final App Creation
1. Go to **Setup** > search for **App Manager**.
2. Click **New Lightning App**.
3. **App Details**: Name: `Rental Management System`.
4. **Navigation Items**: Add **Properties**, **Tenants**, **Reports**, and **Dashboards**.
5. **User Profiles**: Add **System Administrator**.
6. **Save & Finish**.

---

### How to use your App:
1. Open the **App Launcher** and find **Rental Management System**.
2. Go to **Properties** and click **New** to add a house.
3. Go to **Tenants** and click **New** to add a person, and **link them to a Property** using the lookup field you created.
