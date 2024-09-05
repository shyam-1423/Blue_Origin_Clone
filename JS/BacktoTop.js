// Get the button
const backToTopButton = document.getElementById('backToTop');

// Show the button when the user scrolls down 100px from the top of the document
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
});

AOS.init();
