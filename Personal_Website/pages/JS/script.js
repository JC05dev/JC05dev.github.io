document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".topnav a");
  const activeLink = document.querySelector(".topnav a.active");

  // Store the current state when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
      setActiveLink(this);
    });
  });

  // Function to set the active link and update animation durations
  function setActiveLink(link) {
    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");

    // Set animation durations based on the active link
    const animationDuration = link.classList.contains("active") ? "5s" : "15s";
    document.styleSheets[0].insertRule(`.topnav a { animation-duration: ${animationDuration}; }`, 0);
  }

  // Initialize the active link on page load
  setActiveLink(activeLink);
});
