require('dotenv').config();
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { google } = require('googleapis');

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Initialize Firebase Admin
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: "",
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: "",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});

// ✅ Google Sheets Auth
const googleAuth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({
  version: 'v4',
  auth: googleAuth,
});

// ✅ Check if duplicate exists in Google Sheet
async function isDuplicate(uniqueId) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: `${process.env.SHEET_NAME}!${process.env.UNIQUE_ID_COLUMN}:${process.env.UNIQUE_ID_COLUMN}`,
    });

    const values = response.data.values || [];
    const isDuplicateEntry = values.some(row => row[0] === String(uniqueId));
    
    console.log(`Checking duplicate for ID: ${uniqueId} - Found: ${isDuplicateEntry}`);
    return isDuplicateEntry;
  } catch (error) {
    console.error('Error checking duplicates:', error.message);
    return false;
  }
}

// ✅ Add row to Google Sheet
async function addToSheet(rowData) {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: `${process.env.SHEET_NAME}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });
    console.log('✅ Data added to Google Sheet');
    return true;
  } catch (error) {
    console.error('Error adding to sheet:', error.message);
    return false;
  }
}

// ✅ API endpoint to manually add leads
app.post('/api/add-lead', async (req, res) => {
  try {
    const { id, name, email, phone, message } = req.body;

    if (!id || !name) {
      return res.status(400).json({ error: 'ID and name are required' });
    }

    // Check for duplicates
    const duplicate = await isDuplicate(id);
    if (duplicate) {
      return res.status(409).json({ error: 'Lead already exists (duplicate)', id });
    }

    // Add to sheet
    const rowData = [
      id,
      name,
      email || '',
      phone || '',
      message || '',
      new Date().toISOString(),
    ];

    const success = await addToSheet(rowData);
    if (success) {
      return res.json({ success: true, message: 'Lead added to sheet' });
    } else {
      return res.status(500).json({ error: 'Failed to add lead' });
    }
  } catch (error) {
    console.error('Error in /api/add-lead:', error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Listen to Firebase Realtime Database changes
function listenToFirebaseChanges() {
  const db = admin.database();
  const leadsRef = db.ref('leads');

  leadsRef.on('child_added', async (snapshot) => {
    const leadId = snapshot.key;
    const leadData = snapshot.val();

    console.log(`📨 New lead detected from Firebase: ${leadId}`);

    // Check for duplicates
    const duplicate = await isDuplicate(leadId);
    if (duplicate) {
      console.log(`⚠️ Duplicate found, skipping: ${leadId}`);
      return;
    }

    // Add to sheet
    const rowData = [
      leadId,
      leadData.name || '',
      leadData.email || '',
      leadData.phone || '',
      leadData.message || '',
      new Date().toISOString(),
    ];

    await addToSheet(rowData);
  });

  console.log('🔄 Listening to Firebase Realtime Database...');
}

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
  
  // Start listening to Firebase
  listenToFirebaseChanges();
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n⛔ Server shutting down...');
  process.exit(0);
});
