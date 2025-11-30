ZackFinance - Local Frontend Prototype
-------------------------------------
This package contains a static frontend prototype that uses browser localStorage for data persistence.
Files included:
- index.html, projects.html, project_view.html, review.html, about.html, contact.html
- entrepreneur_register.html, entrepreneur_login.html
- investor_register.html, investor_login.html
- admin_login.html, admin.html
- upload.html, chat.html, chat_admin.html
- styles.css, database.json

Admin credentials (change before publishing):
  email: admin@zackfinance.test
  password: AdminZack2025!

How it works:
- Registration pages save users into localStorage (zack_db).
- Uploading projects requires login (sessionStorage holds user info).
- Admin must login with admin credentials to access admin.html (admin_logged flag).
- Public review page hides phone numbers; admin dashboard shows full contact info.
- Charts use Chart.js CDN.
- Chat stores messages in localStorage (zack_msgs).

Security note:
This is a static demo. For production you must implement a proper backend (Node/PHP/Firebase), secure authentication, server database, and remove plaintext credentials.
