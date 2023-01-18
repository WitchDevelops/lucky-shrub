//this is chat gpt generated, review it

// Get the menu button and navigation links elements
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the "open" class on the menu button
  menuBtn.classList.toggle('open');
  // Toggle the visibility of the navigation links
  navLinks.classList.toggle('open');
});


// add this to css
/* Add open class */
.nav-links.open {
    display: block;
  }
  .menu-btn.open .menu-btn__burger {
    background-color: #fff;
  }