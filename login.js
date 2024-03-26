 
// Import Firebase SDK from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Initialize Firebase with your config
const firebaseConfig = {
    apiKey: "AIzaSyCTVGO3AeRbO8f4an_WmFysC6TcWs5EvBo",
    authDomain: "community-care-connect.firebaseapp.com",
    databaseURL: "https://community-care-connect-default-rtdb.firebaseio.com",
    projectId: "community-care-connect",
    storageBucket: "community-care-connect.appspot.com",
    messagingSenderId: "106041086091",
    appId: "1:106041086091:web:ad93f0326174ae7bff448e"
  };

const firebaseApp = initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const alertDiv = document.getElementById('alert');
    const loginButton = document.getElementById('loginButton'); // Added this line

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        const auth = getAuth();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log('User logged in successfully');

            // Redirect to home.html after successful login
            window.location.href = 'home.html';
        } catch (error) {
            console.error('Error logging in:', error);

            // Display error message in the alert div
            alertDiv.textContent = error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'
                ? 'Invalid email or password. Please try again.'
                : 'Error logging in. Please try again.';

            // Show the alert div
            alertDiv.classList.remove('hidden');
        }
    });
});
