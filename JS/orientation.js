// Function to handle orientation changes
function handleOrientationChange() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      document.body.classList.add('portrait-mode');
    } else {
      document.body.classList.remove('portrait-mode');
    }
  }
  
  // Initial check on page load
  handleOrientationChange();
  
  // Listen for changes in orientation
  window.addEventListener('resize', handleOrientationChange);
  