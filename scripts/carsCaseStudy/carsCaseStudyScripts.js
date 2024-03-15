// listeners for page navigation
const navLinksContainer = document.getElementById("navigation-links");
const navLinks = navLinksContainer.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => {
            nav.classList.remove('active')
        })
        link.classList.add("active");
    })
});

// scroll offset
const navigationHeight = document.getElementById('header-wrapper').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 15 + 'px');

const headingsToObserve = document.querySelectorAll(".section-heading");

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
     if ((entry.boundingClientRect.top > 40 && entry.boundingClientRect.bottom < 200)) {
        console.log(entry, entry.boundingClientRect.top)
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        
        const targetId = entry.target.id;
        const correspondingNavItem = document.querySelector('a[href="#' + targetId + '"]');
        if (correspondingNavItem) {
          correspondingNavItem.classList.add('active');
        }
      }
    });
  }, { rootMargin: '-180px 0px 0px 0px' });

headingsToObserve.forEach(heading => {
    observer.observe(heading)
})






