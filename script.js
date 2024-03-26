document.getElementById('processButton').addEventListener('click', function () {
    const imageInput = document.getElementById('imageInput');
    const resultContainer = document.getElementById('resultContainer');
    const resultImage = document.getElementById('resultImage');
    const resultText = document.getElementById('resultText');
    // const resultTextt = document.getElementById('resultTextt');


    // Define a dictionary to map image names to their respective image sources and descriptions
    const imagesData = {
        'adidas.jpg': {
            src: 'adidas.jpg', // Replace with your image source
            descriptionType1: 'Brand Name : Adidas',
            descriptionType2: 'Adidas, in full Adidas AG, German manufacturer of athletic shoes and apparel and sporting goods.',
            descriptionType3: 'Website: https://www.adidas.co.in/'
        },
        'image2.jpg': {
            src: 'image2.jpg', // Replace with your image source
            descriptionType1: 'Description Type 1 for Image 2',
            descriptionType2: 'Description Type 2 for Image 2',

        },
        'image3.jpg': {
            src: 'image3.jpg', // Replace with your image source
            descriptionType1: 'Description Type 1 for Image 3',
            descriptionType2: 'Description Type 2 for Image 3',
        },
        // Add more image names, sources, and descriptions as needed
    };

    if (imageInput.files.length > 0) {
        // Get the uploaded file
        const uploadedImage = imageInput.files[0];
        const uploadedImageName = uploadedImage.name;

        if (uploadedImageName in imagesData) {
            const imageData = imagesData[uploadedImageName];
            resultImage.src = imageData.src;
            resultText.innerHTML = `Name: ${uploadedImageName}<br>  ${imageData.descriptionType1}<br>   ${imageData.descriptionType2}<br>  <link> ${imageData.descriptionType3}</link>${imageData.descriptionType4}`;
         
        } else {
            resultImage.src = 'not_found.jpg'; // Replace with an image for not found
            resultText.textContent = 'ORIGINAL LOGO';
        }

        resultContainer.style.display = 'block';
    } else {
        alert('Please upload an image first.');
    }
});


