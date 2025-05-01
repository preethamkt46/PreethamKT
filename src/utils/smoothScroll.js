// Function to smooth scroll to an element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Adjust based on fixed navbar height
    const headerOffset = 80; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Function to handle smooth scrolling for anchor links
export const handleSmoothScroll = (e, id) => {
  e.preventDefault();
  
  // Close menu if it's open (for mobile)
  const navMenu = document.querySelector('nav ul');
  if (navMenu && navMenu.classList.contains('mobile-active')) {
    navMenu.classList.remove('mobile-active');
  }
  
  scrollToElement(id);
}; 