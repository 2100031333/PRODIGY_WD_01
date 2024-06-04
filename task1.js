window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; /* Darken the background on scroll */
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; /* Original semi-transparent background */
    }
  });
  
  var navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseover', function() {
      this.style.color = '#ff6600';
    });
  
    navLink.addEventListener('mouseout', function() {
      this.style.color = '#fff'; // Change it back to original color
    });
  });
  