// Function to handle orientation changes
function handleOrientationChange() {
    const body = document.body;
    const contentDiv = document.querySelector('.Content');

    if (window.matchMedia("(orientation: portrait)").matches) {
        contentDiv.classList.remove('landscape');
        contentDiv.classList.add('portrait');
    } else {
        contentDiv.classList.remove('portrait');
        contentDiv.classList.add('landscape');
    }
}

// Initial check on page load
handleOrientationChange();

// Listen for changes in orientation
window.addEventListener('resize', handleOrientationChange);
