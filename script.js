// Get the GIF pop-up container and the close button
var gifPopup = document.getElementById('gif-popup');
var closeButton = document.getElementById('close-button');

// Function to open the GIF pop-up
function openGifPopup() {
  gifPopup.style.transform = 'translateY(0)'; // Show the GIF pop-up
}

// Function to close the GIF pop-up
function closeGifPopup() {
  gifPopup.style.transform = 'translateY(100%)'; // Hide the GIF pop-up
}

// Event listener for the close button
closeButton.addEventListener('click', closeGifPopup);

// Open the GIF pop-up after a delay (e.g., 3 seconds)
setTimeout(openGifPopup, 3000);



window.addEventListener('load', function() {
    // Show the preloader
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
  
    // Hide the website content
    var content = document.getElementById('content');
    content.style.display = 'none';
  
    // Hide the preloader after 3 seconds
    setTimeout(function() {
      preloader.style.display = 'none';
      content.style.display = 'block';
    }, 3000);
  });
  
