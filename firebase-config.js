// ---------------------------------------------------------
// PASTE YOUR OWN FIREBASE PROJECT KEYS BELOW.
// You get these from: Firebase Console > Project settings >
// General tab > "Your apps" > the web app > SDK setup and config.
// It's safe for these values to be public in your site's code —
// that's how Firebase web apps normally work. Your data is
// protected separately, by the security rules you set in Firestore.
// ---------------------------------------------------------

export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId: "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_SENDER_ID_HERE",
  appId: "PASTE_YOUR_APP_ID_HERE"
};

// The only email allowed to log in and publish posts.
// Change this to your real email — it must match the account
// you create in Firebase Authentication.
export const OWNER_EMAIL = "smartboy0767@gmail.com";
