document.addEventListener('DOMContentLoaded', function () {
  const navIcon = document.querySelector('.nav-icon');
  const navLinks = document.querySelectorAll('.nav-link');
  const title = document.querySelector('.Title');

  navIcon.addEventListener('click', function () {
    const topnav = document.querySelector('.topnav');
    topnav.classList.toggle('responsive');
    title.classList.toggle('responsive');
  });

  // Hide the menu when a link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const topnav = document.querySelector('.topnav');
      if (topnav.classList.contains('responsive')) {
        topnav.classList.remove('responsive');
        title.classList.remove('responsive');
      }
    });
  });
});
