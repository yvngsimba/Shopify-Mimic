const startFreeTrial = document.querySelectorAll('.FreeTrial')

startFreeTrial.forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = "https://accounts.shopify.com/store-create?language=en&locale=en-CA&signup_page=https%3A%2F%2Fwww.shopify.com%2Fca&signup_types%5B%5D=paid_trial_experience&_y=6633a316-3fc5-4014-a03b-dd5fff8301e0&_s=4bdf3b30-2e0d-4ef3-9ddd-cb39d8f80aa2&_p=ee847714-611a-4996-a553-7b6acb1408ee"
  });
});