# Sanity CMS Setup Guide for Sreem Collection

## For Your Customer (Non-Technical User)

This is a simple guide for your customer to set up their content management system where they can add/edit products without coding.

---

## Step 1: Create Sanity Account (Customer does this)

1. Go to https://www.sanity.io/
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with Google/GitHub or Email
4. Create a new project:
   - Project name: **"Sreem Collection"** (or any name they want)
   - Click **"Create project"**
5. **IMPORTANT**: Save these details and share with you (developer):
   - **Project ID**: (looks like `abc123xy`)
   - **Dataset name**: Use `production` (default)

---

## Step 2: Set Up Sanity Studio (Customer does this)

### Easy Method - Using Sanity's Web Interface:

1. After creating the project, Sanity will guide you to create a Studio
2. Follow their setup wizard
3. Choose **"E-commerce"** or **"Product catalog"** template if asked

### OR Manual Method - Create Studio on Their Computer:

```bash
# Open Command Prompt or Terminal
# Navigate to where they want the studio folder

# Run this command:
npm create sanity@latest

# Answer the prompts:
# - Select project: Choose their newly created project
# - Dataset: production
# - Output path: ./sreem-studio (or any name)
# - TypeScript: Yes
# - Template: Clean project
```

---

## Step 3: Share Project Details With You (Developer)

Once customer creates their Sanity project, they need to share:
- **Project ID**: Found in their Sanity dashboard
- **Dataset name**: Usually `production`

You (developer) will then update the website code with these credentials.

---

## Step 4: Add Product Schema (You/Developer does this)

Once you receive the customer's Project ID:

1. Update `src/lib/sanity.ts` with their credentials:
```typescript
projectId: 'CUSTOMER_PROJECT_ID',  // Replace with customer's ID
dataset: 'production',  // Or whatever they chose
```

2. Ask customer to add the product schema:
   - Send them the `SANITY_SCHEMA.txt` file from this project
   - They need to add it to their Studio's schema folder
   - OR you can do it remotely if they give you access

---

## Step 5: Customer Adds Products (No Coding!)

Once the Studio is set up, customer can:

1. Open their Sanity Studio (web-based, looks like: `yourproject.sanity.studio`)
2. Click **"+ Create"** button
3. Select **"Product"**
4. Fill in the form:
   - **Name**: Product name (e.g., "Royal Blue Banarasi Silk Saree")
   - **Slug**: Click "Generate" (auto-creates URL)
   - **Description**: Product details
   - **Price**: Selling price (e.g., 8999)
   - **Original Price**: MRP for discount calculation (e.g., 12999)
   - **Category**: Choose "Sarees" or "Jewelry"
   - **Images**: Click to upload photos (drag & drop supported)
   - **Featured**: Toggle if it's a featured product
   - **In Stock**: Toggle availability
   - For Sarees: Fill fabric, length, blouse piece
   - For Jewelry: Fill material, weight, purity
5. Click **"Publish"**

**That's it!** The product will appear on the website automatically within seconds!

---

## Step 6: Customer Manages Products

Your customer can login to Sanity Studio anytime to:
- ✅ Add new products (just fill a form)
- ✅ Edit existing products (click and edit)
- ✅ Delete products
- ✅ Upload/change images
- ✅ Mark items as out of stock
- ✅ Change prices

**No developer needed!** They manage everything through the visual interface.

---

## What Makes Sanity Perfect for Non-Technical Users:

1. **Visual Interface**: Looks like WordPress - easy to understand
2. **Drag & Drop**: Upload images by dragging files
3. **Live Preview**: See changes immediately
4. **Mobile App**: Manage products from phone/tablet
5. **No Coding**: Everything is forms and buttons
6. **Real-time**: Website updates automatically
7. **Undo/Redo**: Can undo mistakes easily

---

## Files Already Created in This Project:
✅ `src/lib/sanity.ts` - Connection to Sanity
✅ `src/lib/sanity-products.ts` - Fetches products automatically
✅ `SANITY_SCHEMA.txt` - Product form schema for Studio

---

## Next Steps:

1. **Customer**: Create Sanity account → Share Project ID with you
2. **You**: Update `src/lib/sanity.ts` with their Project ID
3. **Customer**: Add products using the visual Studio interface
4. **Done!** Products appear on website automatically

---

## Support Links:
- Sanity Studio Demo: https://www.sanity.io/studio
- Video Tutorial: https://www.sanity.io/docs/getting-started
- Help Center: https://www.sanity.io/help
