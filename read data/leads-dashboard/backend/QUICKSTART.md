# Quick Start Guide

## 5-Minute Setup

### Step 1: Get Your Keys (5 minutes)

**Firebase:**
- Go to https://console.firebase.google.com/
- Select "firestudio-mobile" project
- Settings ⚙️ → Service Accounts
- Click "Generate New Private Key" → Save as `firebase-key.json`

**Google Sheets:**
- Go to https://console.cloud.google.com/
- Create Service Account (or use existing)
- Create JSON key → Save as `google-key.json`
- Enable APIs: Google Sheets API + Google Drive API

### Step 2: Configure .env

Open `backend/.env` and add:

```env
# From firebase-key.json
FIREBASE_PROJECT_ID=firestudio-mobile
FIREBASE_PRIVATE_KEY=<paste the "private_key" value from firebase-key.json>
FIREBASE_CLIENT_EMAIL=<paste the "client_email" from firebase-key.json>

# From google-key.json
GOOGLE_SPREADSHEET_ID=<your sheet ID from URL>
GOOGLE_SERVICE_ACCOUNT_EMAIL=<paste "client_email" from google-key.json>
GOOGLE_PRIVATE_KEY=<paste the "private_key" from google-key.json>

SHEET_NAME=Leads
UNIQUE_ID_COLUMN=A
PORT=5000
NODE_ENV=development
```

### Step 3: Run

```bash
cd backend
npm install
npm run dev
```

### Step 4: Test

Send a test lead:
```bash
curl -X POST http://localhost:5000/api/add-lead \
  -H "Content-Type: application/json" \
  -d '{"id":"test_001","name":"Test User","email":"test@example.com"}'
```

✅ Check your Google Sheet - you should see the new row!

---

## Automatic Flow (Firebase → Google Sheets)

1. Add data to Firebase `leads` node
2. Backend automatically detects it
3. Checks if it's a duplicate (by ID)
4. If new → adds to Google Sheets
5. If duplicate → skips it

That's it! No manual intervention needed.

---

## What's Included

✅ **server.js** - Main backend server
✅ **package.json** - Dependencies (all open source)
✅ **.env** - Configuration file
✅ **.env.example** - Example format
✅ **README.md** - Full documentation
✅ **EXAMPLE_DATA.js** - Sample Firebase structure

---

## Free Deployment

Once working locally, deploy free:

**Option 1: Heroku**
```bash
npm install -g heroku
heroku login
heroku create your-app-name
git push heroku main
```

**Option 2: Railway (recommended)**
1. Go to https://railway.app/
2. Connect GitHub repo
3. Deploy with one click

**Option 3: Your own server**
- Get a cheap VPS
- `ssh` into it
- `git clone` your repo
- `npm install && npm start`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Cannot find module 'express'" | Run `npm install` |
| Firebase not connecting | Check FIREBASE_PRIVATE_KEY has `\n` characters |
| Google Sheets not updating | Share sheet with GOOGLE_SERVICE_ACCOUNT_EMAIL |
| "Duplicate not working" | Make sure UNIQUE_ID_COLUMN matches your sheet |

---

**Questions?** Check README.md for full documentation
