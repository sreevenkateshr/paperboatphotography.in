// Create an intersection observer to watch when the section enters the viewport
    document.addEventListener("DOMContentLoaded", function () {
      var navLinks = document.querySelectorAll(".nav-link");
      var navbarCollapse = document.querySelector(".navbar-collapse");

      navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true,
          });
        });
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const menuToggle = document.getElementById("menu-toggle");
      const icon = menuToggle.querySelector("i");
      const navbarNav = document.getElementById("navbarNav");
      const navLinks = document.querySelectorAll(".nav-link"); // Select all nav items

      // Toggle menu icon on click
      menuToggle.addEventListener("click", function () {
        if (icon.classList.contains("fa-bars")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times"); // Change to close icon
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars"); // Change back to menu icon
        }
      });

      // Close menu on outside click
      document.addEventListener("click", function (event) {
        if (
          !menuToggle.contains(event.target) &&
          !navbarNav.contains(event.target)
        ) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
          navbarNav.classList.remove("show"); // Ensure Bootstrap collapses menu
        }
      });

      // Close menu when clicking on a nav-item
      navLinks.forEach((link) => {
        link.addEventListener("click", function () {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
          navbarNav.classList.remove("show"); // Hide menu
        });
      });
    });
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".capturing-moments");
  const animatedText = document.querySelectorAll(".animated-text");

  // Observer options
  const options = {
    root: null,
    threshold: 0.5, // Trigger animation when 50% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("visible"); // Add visible class when the section is in view
        observer.unobserve(entry.target); // Stop observing after section appears
      }
    });
  }, options);

  observer.observe(section); // Observe the section
});

// Function to switch between the image sets
// let currentSet = 1; // Track which image set is currently visible

// function switchImages() {
//     const firstSet = document.getElementById('image-set1');
//     const secondSet = document.getElementById('image-set2');

//     if (currentSet === 1) {
//         firstSet.classList.add('fade-out'); // Add fade-out animation to the first set
//         setTimeout(() => {
//             firstSet.style.display = 'none'; // Hide the first set
//             secondSet.style.display = 'block'; // Show the second set
//             secondSet.classList.remove('fade-out'); // Remove fade-out animation
//         }, 1000); // Match the duration of the fade-out animation
//         currentSet = 2; // Switch to the second set
//     } else {
//         secondSet.classList.add('fade-out'); // Add fade-out animation to the second set
//         setTimeout(() => {
//             secondSet.style.display = 'none'; // Hide the second set
//             firstSet.style.display = 'block'; // Show the first set
//             firstSet.classList.remove('fade-out'); // Remove fade-out animation
//         }, 1000); // Match the duration of the fade-out animation
//         currentSet = 1; // Switch back to the first set
//     }
// }

// // Set the interval to switch images every 3 seconds
// setInterval(switchImages, 3000);



// // Back-to-top button functionality
// const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// // Show the button when scrolling down
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 300) {
//         scrollToTopBtn.style.display = "flex";
//     } else {
//         scrollToTopBtn.style.display = "none";
//     }
// });

// // Scroll to the top when clicking the button
// scrollToTopBtn.addEventListener("click", () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// });

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopBtn");
  const progressCircle = document.getElementById("progress");
  const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const circleLength = 125; 

  window.addEventListener("scroll", () => {
      let scrollPercentage = window.scrollY / totalScrollHeight;
      let strokeOffset = circleLength * (1 - scrollPercentage);

      progressCircle.style.strokeDashoffset = strokeOffset;

      if (window.scrollY > 100) {
          scrollToTopButton.style.opacity = 1;
      } else {
          scrollToTopButton.style.opacity = 0;
      }
  });

  scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


 document.addEventListener("DOMContentLoaded", function () {
   const content = document.querySelector(".content");

   function checkScroll() {
     const contentPosition = content.getBoundingClientRect().top;
     const screenPosition = window.innerHeight / 1.3;

     if (contentPosition < screenPosition) {
       content.classList.add("show");
     } else {
       content.classList.remove("show");
     }
   }

   window.addEventListener("scroll", checkScroll);
   checkScroll(); // To check on page load in case already in view
 });