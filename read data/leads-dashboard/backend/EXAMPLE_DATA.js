// Example Firebase Leads Structure
// Add this to your Firebase Realtime Database under "leads" node

{
  "leads": {
    "lead_001": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "123-456-7890",
      "message": "Interested in services",
      "timestamp": 1716000000000
    },
    "lead_002": {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "098-765-4321",
      "message": "Want more information",
      "timestamp": 1716100000000
    }
  }
}

// The backend will automatically:
// 1. Listen for new child_added events under /leads
// 2. Check if the lead ID already exists in Google Sheets
// 3. If NOT duplicate → add to Google Sheets with timestamp
// 4. If duplicate → skip and log warning

// Google Sheets will have columns:
// A: Lead ID
// B: Name
// C: Email
// D: Phone
// E: Message
// F: Timestamp
