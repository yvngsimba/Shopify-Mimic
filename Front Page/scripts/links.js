const startFreeTrial = document.querySelectorAll('.FreeTrial')

startFreeTrial.forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = "https://accounts.shopify.com/store-create?language=en&locale=en-CA&signup_page=https%3A%2F%2Fwww.shopify.com%2Fca&signup_types%5B%5D=paid_trial_experience&_y=6633a316-3fc5-4014-a03b-dd5fff8301e0&_s=4bdf3b30-2e0d-4ef3-9ddd-cb39d8f80aa2&_p=ee847714-611a-4996-a553-7b6acb1408ee"
  });
});

// Removing and adding classes for video

const storyButton = document.querySelector('.shopify-story');
const overlayScreen = document.querySelector('.overlay');
const video = document.querySelector('.story');
const closeButton = document.querySelector('.close-button');


// Shopify button, once clicked will have the overlay appear,video play & appear
function activatedButton() {
  storyButton.addEventListener('click',()=> {
    overlayScreen.classList.remove('hidden')
    video.classList.remove('hidden')
    video.play();
  });
}

// Once Overlay is clicked, video will be minimized

overlayScreen.addEventListener('click', ()=> {
  minimizedScreen();
  overlayScreen.classList.add('hidden')
});
activatedButton();

// Once overlay is clicked video will shrink & close button will appear
function minimizedScreen() {
  video.style.position = "fixed";
  video.style.top = "750px";
  video.style.left = "1300px";
  video.style.height="200px";
  video.style.width="354px";

  closeButton.classList.remove('hidden')
};

// Centers video
function centerVideo() {
  video.style.position = "absolute";
  video.style.top = "25%";
  video.style.left = "24%";
  video.style.height = "492px";
  video.style.width = "873.333px";
}

// Close button clicked, pauses video, hides video and centers 
closeButton.addEventListener('click', () => {
  video.pause();
  closeButton.classList.add('hidden');
  video.classList.add('hidden');
  centerVideo()
});
