 


document.getElementById('fileInput').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
      var fileName = file.name;
      if (fileName === "adidas-fake-logo.jpg") {
        document.getElementById('Result').textContent = "Fake logo";
        document.getElementById('BrandName').textContent = "Brand Name: Adidas";
        document.getElementById('Description').textContent = "About: Adidas AG is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. ";
        document.getElementById('WebsiteLink').innerHTML = "Website Link: <a href='https://www.adidas.com' target='_blank'>www.adidas.com</a>";
        document.getElementById('BrandName').style.display = 'block';
        document.getElementById('Description').style.display = 'block';
        document.getElementById('WebsiteLink').style.display = 'block';
        document.getElementById('orgirinal-logo').src = "/assets/adidas.png"; // Change the image src here
    } else if (fileName === "adidas.jpg") {
        document.getElementById('Result').textContent = "Original";
        document.getElementById('BrandName').style.display = 'none';
        document.getElementById('Description').style.display = 'none';
        document.getElementById('WebsiteLink').style.display = 'none';
      } else if (fileName === "nike-fake-logo.jpg") {
        document.getElementById('Result').textContent = "Fake logo";
        document.getElementById('BrandName').textContent = "Brand Name: Nike";
        document.getElementById('Description').textContent = "About: Chain retailer selling a range of Nike athletic footwear, apparel & accessories ";
        document.getElementById('WebsiteLink').innerHTML = "Website Link: <a href='https://www.nike.com' target='_blank'>www.nike.com</a>";
        document.getElementById('BrandName').style.display = 'block';
        document.getElementById('Description').style.display = 'block';
        document.getElementById('WebsiteLink').style.display = 'block';
        document.getElementById('orgirinal-logo').src = "/assets/nike.jpg"; // Change the image src here

      } else if (fileName === "nike.jpg") {
        document.getElementById('Result').textContent = "Original";
        document.getElementById('BrandName').style.display = 'none';
        document.getElementById('Description').style.display = 'none';
        document.getElementById('WebsiteLink').style.display = 'none';
      } else if (fileName === "nike-fake-logo.jpg") {
        document.getElementById('Result').textContent = "Fake logo";
        document.getElementById('BrandName').textContent = "Brand Name: Nike";
        document.getElementById('Description').textContent = "About: Chain retailer selling a range of Nike athletic footwear, apparel & accessories"  ;
        document.getElementById('WebsiteLink').innerHTML = "Website Link: <a href='https://www.nike.com' target='_blank'>https://www.nike.com</a>";
        document.getElementById('BrandName').style.display = 'block';
        document.getElementById('Description').style.display = 'block';
        document.getElementById('WebsiteLink').style.display = 'block';
        document.getElementById('orgirinal-logo').src = "/assets/kfc.png"; // Change the image src here

      }
      
      else if (fileName === "amazon.png") {
        document.getElementById('Result').textContent = "Original";
        document.getElementById('BrandName').style.display = 'none';
        document.getElementById('Description').style.display = 'none';
        document.getElementById('WebsiteLink').style.display = 'none';
      } else if (fileName === "amazon-fake-logo.png") {
        document.getElementById('Result').textContent = "Fake logo";
        document.getElementById('BrandName').textContent = "Brand Name: Amazon";
        document.getElementById('Description').textContent = "About:  Amazon.com, Inc., doing business as Amazon, is an American multinational corporation and technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.";
        document.getElementById('WebsiteLink').innerHTML = "Website Link: <a href='https://www.Amazon.com' target='_blank'>https://www.Amazon.co</a>";
        document.getElementById('BrandName').style.display = 'block';
        document.getElementById('Description').style.display = 'block';
        document.getElementById('WebsiteLink').style.display = 'block';
        document.getElementById('orgirinal-logo').src = "/assets/amazon.png"; // Change the image src here

      }  


      else if (fileName === "cola.jpg") {
        document.getElementById('Result').textContent = "Original";
        document.getElementById('BrandName').style.display = 'none';
        document.getElementById('Description').style.display = 'none';
        document.getElementById('WebsiteLink').style.display = 'none';
      } else if (fileName === "cola-fake-logo.png") {
        document.getElementById('Result').textContent = "Fake logo";
        document.getElementById('BrandName').textContent = "Brand Name: Coco-Cola";
        document.getElementById('Description').textContent = "About: Coca-Cola, or Coke, is a carbonated soft drink with a cola flavor manufactured by the Coca-Cola Company ";
        document.getElementById('WebsiteLink').innerHTML = "Website Link: <a href='https://www.coca-cola.com' target='_blank'>https://www.coca-cola.com</a>";
        document.getElementById('BrandName').style.display = 'block';
        document.getElementById('Description').style.display = 'block';
        document.getElementById('WebsiteLink').style.display = 'block';
        document.getElementById('orgirinal-logo').src = "/assets/cola.jpg"; // Change the image src here

      }  


      else if (fileName === "samsung.jpg") {
        document.getElementById('Result').textContent = "Original";
        document.getElementById('BrandName').style.display = 'none';
        document.getElementById('Description').style.display = 'none';
        document.getElementById('WebsiteLink').style.display = 'none';
      } else if (fileName === "samsung-fake-logo.png") {
        document.getElementById('Result').textContent = "Fake logo";
        document.getElementById('BrandName').textContent = "Brand Name: Samsung";
        document.getElementById('Description').textContent = "About: Samsung Electronics Co., Ltd. is a South Korean multinational major appliance and consumer electronics corporation headquartered in Yeongtong-gu, Suwon, South Korea.";
        document.getElementById('WebsiteLink').innerHTML = "Website Link: <a href='www.samsung.com' target='_blank'>https://www.samsung.com</a>";
        document.getElementById('BrandName').style.display = 'block';
        document.getElementById('Description').style.display = 'block';
        document.getElementById('WebsiteLink').style.display = 'block';
        document.getElementById('orgirinal-logo').src = "/assets/samsung.jpg"; // Change the image src here

      } 

      else if (fileName === "facebook.png") {
        document.getElementById('Result').textContent = "Original";
        document.getElementById('BrandName').style.display = 'none';
        document.getElementById('Description').style.display = 'none';
        document.getElementById('WebsiteLink').style.display = 'none';
      } else if (fileName === "facebook-fake-logo.png") {
        document.getElementById('Result').textContent = "Fake logo";
        document.getElementById('BrandName').textContent = "Brand Name: facebook";
        document.getElementById('Description').textContent = "About:Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. ";
        document.getElementById('WebsiteLink').innerHTML = "Website Link: <a href='https://www.facebook.com' target='_blank'>https://www.facebook.com</a>";
        document.getElementById('BrandName').style.display = 'block';
        document.getElementById('Description').style.display = 'block';
        document.getElementById('WebsiteLink').style.display = 'block';
        document.getElementById('orgirinal-logo').src = "/assets/facebook.png"; // Change the image src here

      } 
       
 
      else {
        document.getElementById('Result').textContent = "No result available";
        document.getElementById('BrandName').style.display = 'none';
        document.getElementById('Description').style.display = 'none';
        document.getElementById('WebsiteLink').style.display = 'none';
      }
      var reader = new FileReader();
      reader.onload = function(e) {
        var image = document.getElementById('orgirinal-logo');
        
        document.getElementById('show').style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      document.getElementById('show').style.display = 'none';
    }
  });
  

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////


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
            location.reload(); // Refresh the website after saving the rating
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
