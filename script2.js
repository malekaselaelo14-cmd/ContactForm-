import { getFirestore, collection, addDoc, serverTimestamp }
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDGLPYGtFKLJZ_lOTICvUXxRWjokII7xKQ",
  authDomain: "mlabcontact-form.firebaseapp.com",
  projectId: "mlabcontact-form",
  storageBucket: "mlabcontact-form.firebasestorage.app",
  messagingSenderId: "45217537393",
  appId: "1:45217537393:web:5743a11743cd787d6f6ad0",
  measurementId: "G-44C08FBF0P"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Handle form submit
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Read input fields
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  try {
    // ✅ Add to Firestore
    await addDoc(collection(db, "messages"), {
      name: name,
      surname: surname,
      email: email,
      subject: subject,
      message: message,
      timestamp: serverTimestamp()
    });

    alert("✅ Message Sent Successfully!");
    document.getElementById("contactForm").reset();
  } catch (err) {
    alert("❌ Failed to send: " + err);
  }
});