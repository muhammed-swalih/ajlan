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
  

 
 



  document.getElementById('fileInput').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
        // Your existing code for handling file upload

        // After 5 seconds, display the feedback pop-up
        setTimeout(function() {
            document.getElementById('feedbackPopup').style.display = 'block';
        }, 5000);
    }
});

document.getElementById('closeFeedbackPopup').addEventListener('click', function() {
    document.getElementById('feedbackPopup').style.display = 'none';
});

// Add event listener for each star
document.querySelectorAll('.star').forEach(function(star) {
    star.addEventListener('click', function() {
        var rating = parseInt(this.getAttribute('data-rating'));
        console.log('You rated us: ' + rating + ' stars');

        // Remove the golden color class from all stars
        document.querySelectorAll('.star').forEach(function(s) {
            s.classList.remove('gold');
        });

        // Add the golden color class to clicked star and previous stars
        for (var i = 1; i <= rating; i++) {
            document.querySelector('.star[data-rating="' + i + '"]').classList.add('gold');
        }
    });
});


//////////////////////////////////////////////
//////////////////////////////////////////////
const params = new URLSearchParams(window.location.search);
currentUserId = params.get('userId'); // Store the user ID in the variable

// Use the currentUserId as needed in your code
console.log('User ID:', currentUserId);