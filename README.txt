ZackFinance v6 - Full Package (Ready to deploy)

Contents:
- All pages (index, register, login, dashboards, chat, projects)
- firebase_core.js (v8 CDN prefilled with your keys)
- styles.css (professional UI)
- Admin dashboard with approve/reject and delete user/project features
- Project upload stores images in Storage and marks status 'pending' for admin approval
- dm_messages collection supports private messaging

Quick deploy steps:
1. In Firebase Console: enable Authentication (Email/Password), Firestore, and Storage.
2. Upload all files to your GitHub Pages repository (root). Ensure firebase_core.js is present.
3. Create an 'admins' collection and add a document with your admin UID (doc id = admin UID).
4. Test registration -> login -> upload project -> admin approve -> project visible.

Security notes:
- To fully delete Firebase Authentication users, you must delete them from Firebase Console or use Firebase Admin SDK.
- Edit firebase/firestore.rules to fit your security needs (sample provided in repo).
