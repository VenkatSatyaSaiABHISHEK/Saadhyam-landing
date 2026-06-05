# Leads Backend - Open Source Solution

This is a **fully open source** Node.js + Express backend that:
- ✅ Listens to Firebase Realtime Database changes
- ✅ Automatically posts new leads to Google Sheets
- ✅ Prevents duplicates using unique ID checking
- ✅ Provides API endpoint for manual lead submission

## Tech Stack (All Open Source)
- **Express.js** - Web framework
- **Firebase Admin SDK** - Firebase database listener
- **Google Sheets API** - Sheet operations
- **Node.js** - Runtime

---

## Setup Instructions

### 1. Get Firebase Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project → Settings → Service Accounts
3. Click "Generate New Private Key"
4. Save the JSON file

### 2. Get Google Service Account Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a Service Account
3. Create JSON key
4. Enable **Google Sheets API** and **Google Drive API**

### 3. Share Google Sheet

1. Create a Google Sheet
2. Get your Spreadsheet ID from the URL: `docs.google.com/spreadsheets/d/**{ID}**/edit`
3. Share it with the service account email

### 4. Install Dependencies

```bash
cd backend
npm install
```

### 5. Configure .env

```env
# From Firebase Service Account JSON
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxx@your-project.iam.gserviceaccount.com

# From Google Service Account JSON
GOOGLE_SPREADSHEET_ID=your-sheet-id
GOOGLE_SERVICE_ACCOUNT_EMAIL=service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Sheet settings
SHEET_NAME=Leads
UNIQUE_ID_COLUMN=A

PORT=5000
NODE_ENV=development
```

### 6. Run the Backend

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

---

## How It Works

### Flow 1: Firebase Listener (Automatic)
```
Firebase Realtime DB → Backend listens → Check duplicates → Add to Google Sheets
```

### Flow 2: API Endpoint (Manual)
```
POST /api/add-lead → Check duplicates → Add to Google Sheets
```

---

## API Usage

### Submit a lead via API
```bash
curl -X POST http://localhost:5000/api/add-lead \
  -H "Content-Type: application/json" \
  -d '{
    "id": "lead_123",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "message": "Interested in your service"
  }'
```

### Response Success (200)
```json
{
  "success": true,
  "message": "Lead added to sheet"
}
```

### Response Duplicate (409)
```json
{
  "error": "Lead already exists (duplicate)",
  "id": "lead_123"
}
```

---

## Frontend Integration

Add this to your React app to submit leads:

```javascript
// In your form submission handler
const submitLead = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/add-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log('✅ Lead added successfully');
    } else {
      console.log('⚠️', result.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## Deployment Options (Free)

| Option | Cost | Setup |
|--------|------|-------|
| **Heroku** | Free tier (limited) | `git push heroku main` |
| **Railway** | Free tier | GitHub integration |
| **Render** | Free tier | GitHub integration |
| **Replit** | Free tier | Web IDE |
| **Your Server** | Depends | `npm start` |

---

## Troubleshooting

**"Duplicate check not working?"**
- Make sure Google Sheet is shared with service account email
- Check SHEET_NAME in .env matches actual sheet name

**"Firebase not connecting?"**
- Verify FIREBASE_PRIVATE_KEY has proper newlines (`\n`)
- Check Realtime Database is enabled in Firebase

**"Google Sheets not updating?"**
- Enable Google Sheets API in Cloud Console
- Verify spreadsheet ID is correct
- Check service account has editor access

---

## License
MIT - Open source and free to use
