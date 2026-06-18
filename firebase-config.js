// firebase-config.js — AJPLUS Security
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlZldqAnieuNBnkAltj3pvPGQ7FwijadA",
  authDomain: "ajplus-security.firebaseapp.com",
  databaseURL: "https://ajplus-security-default-rtdb.firebaseio.com",
  projectId: "ajplus-security",
  storageBucket: "ajplus-security.firebasestorage.app",
  messagingSenderId: "948708152932",
  appId: "1:948708152932:web:1791cc6f4beccfbfd17171",
  measurementId: "G-PSQFSV8C97"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Instances za kimataifa — zitumike kwenye kurasa zote
const database = firebase.database();

/*
  ============================================================
  FIREBASE DATABASE RULES ZINAZOHITAJIKA (weka kwenye Console)
  ============================================================
  {
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "guards":               { ".indexOn": ["role", "status", "site"] },
    "clients":              { ".indexOn": ["status", "email"] },
    "users":                { ".indexOn": ["role", "status"] },
    "assignments":          { ".indexOn": ["clientId", "guardId", "status", "createdAt"] },
    "patrol_logs":          { ".indexOn": ["guardId", "site", "timestamp"] },
    "incidents":            { ".indexOn": ["guardId", "site", "timestamp"] },
    "gate_entries":         { ".indexOn": ["guardId", "site", "timestamp"] },
    "vehicle_logs":         { ".indexOn": ["guardId", "site", "timestamp"] },
    "key_logs":             { ".indexOn": ["guardId", "site", "timestamp"] },
    "property_passes":      { ".indexOn": ["guardId", "site", "timestamp"] },
    "liveGuards":           { ".indexOn": ["site", "updatedAt"] },
    "chats":                { ".indexOn": ["timestamp"] },
    "panic_alerts":         { ".indexOn": ["timestamp", "seenByAdmin"] },
    "invoices":             { ".indexOn": ["clientId", "month", "createdAt", "status"] },
    "payroll":              { ".indexOn": ["status"] },
    "pending_registrations":{ ".indexOn": ["reviewedByAdmin", "timestamp"] },
    "reports":              { ".indexOn": ["guardId", "timestamp"] }
  }
}
  ============================================================
*/
