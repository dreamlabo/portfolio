// listeners for page navigation
const navLinksContainer = document.getElementById("navigation-links");
const navLinks = navLinksContainer.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        navLinks.forEach(nav => {
            nav.classList.remove('active')
            // console.log('remove')
        })
        link.classList.add("active");

    })
});

// scroll offset
const navigationHeight = document.getElementById('header-wrapper').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 15 + 'px');

// Intersection observer for side navigation section indicator
// const headingsToObserve = document.querySelectorAll(".section-top");
// console.log(headingsToObserve)

// var observer = new IntersectionObserver(function(entries) {
//     entries.forEach(function(entry) {
//       // If the section is intersecting with the viewport
//     //   console.log(entry, entry.boundingClientRect.top)
//     if ((entry.boundingClientRect.top < 350 )) {
//         console.log(entry, entry.boundingClientRect.top)
//         // Remove the 'active' class from all navigation items
//         navLinks.forEach(function(link) {
//           link.classList.remove('active');
//         });
        
//         // Get the corresponding navigation item and add the 'active' class
//         const targetId = entry.target.id;
//         const correspondingNavItem = document.querySelector('a[href="#' + targetId + '"]');
//         if (correspondingNavItem) {
//           correspondingNavItem.classList.add('active');
//         }
//       }
//     });
//   }, { rootMargin: '-120px 0px 0px 0px' });

// headingsToObserve.forEach(heading => {
//     observer.observe(heading)
// })

const sections = document.querySelectorAll(".section-heading");
// Create a new Intersection Observer instance for each section
sections.forEach(function(section) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        // If the top of the container is within 100px from the top or bottom of the viewport
        if ((entry.boundingClientRect.top > 40 && entry.boundingClientRect.bottom < 180)) {
          // Remove the 'active' class from all navigation items
          navLinks.forEach(function(item) {
            item.classList.remove('active');
          });
          
          // Get the corresponding navigation item and add the 'active' class
          var targetId = entry.target.id;
          var correspondingNavItem = document.querySelector('a[href="#' + targetId + '"]');
          if (correspondingNavItem) {
            correspondingNavItem.classList.add('active');
          }
        }
      });
    }, {rootMargin: '-100px 0px 0px 0px' }); // Set the top and bottom margin to -100px
  
    // Observe the container
    observer.observe(section);
  });
  
  // Function to calculate the threshold based on the height of each section
  function calculateThreshold(sectionHeight) {
    // Calculate the threshold dynamically based on the height of the section
    return Math.min(1, 100 / (sectionHeight/4));
  }





