import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkSW_5AmnLiw8dGB3tGqW1i7oHB8zwRTA",
    authDomain: "true-logo.firebaseapp.com",
    projectId: "true-logo",
    storageBucket: "true-logo.appspot.com",
    messagingSenderId: "192514230251",
    appId: "1:192514230251:web:ad8a4e7872c26f1fcc7bae"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(firebaseApp);

// Variable to store the selected rating
let selectedRating = 0;

// Function to show feedback popup
function showFeedbackPopup() {
    // Your code to show the feedback popup goes here
    console.log('Feedback popup shown');
}

// Add event listener for each star
document.querySelectorAll('.star').forEach(function(star) {
    star.addEventListener('click', function() {
        selectedRating = parseInt(this.getAttribute('data-rating'));
        console.log('You rated us: ' + selectedRating + ' stars'); // Debug logging

        // Remove the gold class from all stars
        document.querySelectorAll('.star').forEach(function(s) {
            s.classList.remove('gold');
        });

        // Add the gold class to clicked star and previous stars
        for (let i = 1; i <= selectedRating; i++) {
            document.querySelector('.star[data-rating="' + i + '"]').classList.add('gold');
        }
    });
});

// Add event listener for the "Give Feedback" button
document.getElementById('feedbackButton').addEventListener('click', function() {
    // Your logic to save data to the database goes here
    const brandName = document.getElementById('BrandName').textContent.split(": ")[1];
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId'); // Get the user ID from URL query parameters
    const userName = params.get('userName'); // Get the user name from URL query parameters
    console.log('Rating value to be saved: ' + selectedRating); // Debug logging
    const ratingData = {
        userName: userName, // Include the username in the rating data
        rating: selectedRating
    };
    console.log('Rating data to be saved:', ratingData); // Debug logging
    // Push the rating data under the user's ID
    push(ref(database, 'ratings/' + brandName + '/' + userId), ratingData)
        .then(() => {
            console.log('Rating data pushed to Firebase successfully.');
        })
        .catch((error) => {
            console.error('Error pushing rating data to Firebase: ', error);
        });
});

// This part retrieves the user ID from the URL query parameters
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    console.log('User ID:', userId);
});
