// ====== הדבק כאן את הגדרות Firebase שלך ======
// Firebase Console ← Project settings ← Your apps ← Web app ← firebaseConfig
// databaseURL הוא ברירת מחדל (us-central1). אם יצרת את ה-Database באזור אחר, העתק את הכתובת מעמוד Realtime Database
const firebaseConfig = {
  apiKey: "AIzaSyCfg0Ryw5MgaQqM7jHFrDZ3nc2yIzLen6Y",
  authDomain: "quiz11-6226a.firebaseapp.com",
  databaseURL: "https://quiz11-6226a-default-rtdb.firebaseio.com",
  projectId: "quiz11-6226a",
  storageBucket: "quiz11-6226a.firebasestorage.app",
  messagingSenderId: "240507006205",
  appId: "1:240507006205:web:67bfbe919b6c746471a294"
};

// שם הסשן. שנו אותו (למשל "class-b") כדי להתחיל סקר חדש ונקי.
const SESSION = "science-ai-1";

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const answersRef = db.ref("sessions/" + SESSION + "/responses");
