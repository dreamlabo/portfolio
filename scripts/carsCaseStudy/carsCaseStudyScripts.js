// listeners for page navigation
const navLinksContainer = document.getElementById("navigation-links");
const navLinks = navLinksContainer.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        navLinks.forEach(nav => {
            nav.classList.remove('active')
            console.log('remove')
        })
        link.classList.add("active")

    })
});

// scroll offset
const navigationHeight = document.getElementById('header-wrapper').offsetHeight;
console.log(navigationHeight)
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 15 + 'px')

