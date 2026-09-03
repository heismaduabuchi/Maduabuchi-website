rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'smartboy0767@gmail.com';
    }
    match /quotes/{quoteId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'smartboy0767@gmail.com';
    }
  }
} 
