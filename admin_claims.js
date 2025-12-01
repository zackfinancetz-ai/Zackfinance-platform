// Usage: node admin_claims.js user@example.com
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // download from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const email = process.argv[2];
if(!email){
  console.log('Usage: node admin_claims.js user@example.com');
  process.exit(1);
}

admin.auth().getUserByEmail(email)
  .then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {admin: true});
  })
  .then(() => console.log('Custom claim added.'))
  .catch(err => console.error(err));
