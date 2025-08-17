document.addEventListener("DOMContentLoaded", function() {
  console.log("Website loaded successfully!");

/*   // Select the necessary elements
  const navToggle = document.querySelector(".container i");
  const navMenu = document.querySelector(".nav");

  // Add event listener to the navigation toggle
  navToggle.addEventListener("click", toggleNavMenu);

  // Function to toggle the navigation menu
  function toggleNavMenu() {
    navMenu.classList.toggle("active");
  } */

 const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    let menuOpen = false;

    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      menuOpen = !menuOpen;
      navToggle.innerHTML = menuOpen 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });

});


