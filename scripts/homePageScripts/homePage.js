// About section Intersection Observer
// Fades 'about-text' in on scroll
const aboutTextElements = document.querySelectorAll(".about-text")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('add-opacity');
                observer.unobserve(entry.target)
            }
    })
}, {threshold: 0.5});


aboutTextElements.forEach(element => {
    observer.observe(element);
});