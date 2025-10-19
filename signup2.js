
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAugy4VlQWqDtoyLJbw8vQQ-sAvbwvq8S0",
    authDomain: "aushad-5208b.firebaseapp.com",
    projectId: "aushad-5208b",
    storageBucket: "aushad-5208b.firebasestorage.app",
    messagingSenderId: "1083290584761",
    appId: "1:1083290584761:web:b113f6e2eb6d4244123d68"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



const Submit = document.getElementById('Submit');
Submit.addEventListener("click", function(event) {
  event.preventDefault();

  const fName = document.getElementById('fName').value;
  const lName = document.getElementById('lName').value;
  const rEmail = document.getElementById('rEmail').value;
  const rPassword = document.getElementById('rPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  createUserWithEmailAndPassword(auth, rEmail, rPassword)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href = 'home.html'; // Redirect here on success
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
