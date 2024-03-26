// Import Firebase SDK from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyCkSW_5AmnLiw8dGB3tGqW1i7oHB8zwRTA",
  authDomain: "true-logo.firebaseapp.com",
  projectId: "true-logo",
  storageBucket: "true-logo.appspot.com",
  messagingSenderId: "192514230251",
  appId: "1:192514230251:web:ad8a4e7872c26f1fcc7bae"
};
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const alertDiv = document.getElementById('alert');

  form.addEventListener('submit', async function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const { name, email, password } = Object.fromEntries(formData); // Removed age and image

      // Create a new user with email and password
      const auth = getAuth(firebaseApp);
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

        // Save additional user data to Firebase Realtime Database
        const database = getDatabase(firebaseApp);
        const usersRef = ref(database, 'users');

        // Save the user data using the user's UID as the key
        const response = await set(ref(database, `users/${user.uid}`), {
            name,
            email
        });

        // Redirect to home.html after successful registration with user ID as a query parameter
        window.location.href = `home.html?userId=${user.uid}`;

      } catch (error) {
          // Display error message in the alert div
          alertDiv.textContent = error.code === 'auth/email-already-in-use'
              ? 'Email address is already in use. Please use a different email address.'
              : ' successfully Registered';

          // Show the alert div
          alertDiv.classList.remove('hidden');

          // Refresh the page after 3 seconds
          setTimeout(function () {
              location.reload();
          }, 3000);
      }
  });
});
