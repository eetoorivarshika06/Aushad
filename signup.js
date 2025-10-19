import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAugy4VlQWqDtoyLJbw8vQQ-sAvbwvq8S0",
  authDomain: "aushad-5208b.firebaseapp.com",
  projectId: "aushad-5208b",
  storageBucket: "aushad-5208b.firebasestorage.app",
  messagingSenderId: "1083290584761",
  appId: "1:1083290584761:web:b113f6e2eb6d4244123d68",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// For local/testing purposes we support a simple dummy phone+OTP flow:
// If phone === '8125314517' and otp === '123456' then treat as valid, otherwise invalid.
// This avoids needing real SMS/reCAPTCHA during local testing.


const messageElement = document.getElementById("message");
const sendCodeBtn = document.getElementById("sendCode");
const verifyCodeBtn = document.getElementById("verifyCode");


sendCodeBtn.addEventListener("click", () => {
  const phoneNumber = document.getElementById("phoneNumber").value.trim();


  if (!phoneNumber) {
    alert("Please enter a valid phone number.");
    return;
  }


  // Local dummy behavior: only show "sent" message for the test phone
  if (phoneNumber === '8125314517') {
    messageElement.style.color = "blue";
    messageElement.textContent = "OTP sent! (use 123456 for local test)";
    // store a flag for verification
    window.__dummyPhone = phoneNumber;
    window.__dummyOtp = '123456';
  } else {
    // Optionally, we could call Firebase's signInWithPhoneNumber here if you want real SMS
    messageElement.style.color = "red";
    messageElement.textContent = "This demo only supports the test number. Use 8125314517.";
  }
});


verifyCodeBtn.addEventListener("click", () => {
  const otpCode = document.getElementById("otpCode").value.trim();


  if (!otpCode) {
    alert("Please enter the OTP.");
    return;
  }


  messageElement.textContent = "";


  // Validate against dummy values
  if (window.__dummyPhone === '8125314517' && otpCode === '123456') {
    messageElement.style.color = "green";
    messageElement.textContent = "Creating Account...";
    console.log("Dummy phone login success for", window.__dummyPhone);
    // Redirect to home page on success
    window.location.href = 'home.html';  // Change this to your actual home page URL
  } else {
    messageElement.style.color = "red";
    messageElement.textContent = "Invalid phone number or OTP.";
  }
});


// NOTE: If you want to enable real SMS phone auth, uncomment and properly configure the
// RecaptchaVerifier and signInWithPhoneNumber calls above and remove the dummy logic.
