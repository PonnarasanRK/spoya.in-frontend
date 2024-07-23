const navSlide = () => {
    // Selecting elements
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Function to toggle navigation and animate links
    const toggleNav = () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
        });
      
        // Toggle burger animation
        burger.classList.toggle('toggle');
    };

    // Event listener for burger click
    burger.addEventListener('click', toggleNav);
};

// Initialize navigation slide effect
navSlide();
