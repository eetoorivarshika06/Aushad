import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAugy4VlQWqDtoyLJbw8vQQ-sAvbwvq8S0",
  authDomain: "aushad-5208b.firebaseapp.com",
  projectId: "aushad-5208b",
  storageBucket: "aushad-5208b.firebasestorage.app",
  messagingSenderId: "1083290584761",
  appId: "1:1083290584761:web:b113f6e2eb6d4244123d68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("sEmail").value.trim();
  const password = document.getElementById("sPassword").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    // Firebase sign-in
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch name from Firestore
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      localStorage.setItem("displayName", userData.firstName || "User");
    } else {
      localStorage.setItem("displayName", "User");
    }

    alert("Sign in successful");
    window.location.href = "home.html";
  } catch (err) {
    alert(err.message);
  }
});
