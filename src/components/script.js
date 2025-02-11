// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      // Add the animation class when the element is in the viewport
      element.classList.add('animated');
    } else {
      // Remove the animation class when the element is out of the viewport
      element.classList.remove('animated');
    }
  });
}

// Add event listener for scroll
window.addEventListener('scroll', handleScrollAnimations);

// Trigger the function on page load to check for elements already in the viewport
window.addEventListener('load', handleScrollAnimations);