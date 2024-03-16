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


const introScreen = document.getElementById("intro-screen")
const topLetters = document.querySelectorAll(".top-logo-letters");
const logoBottom = document.querySelector(".logo-bottom")

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
            topLetters.forEach((letter, index) => {
                setTimeout(() => {
                letter.classList.add("active");
            }, (index + 1) * 150)
        })

        setTimeout(() => {
            logoBottom.classList.add("animate-up")
        }, 800)

        setTimeout(()=> {
            introScreen.style.top = '-100vh'
        }, 1600)

    }, 2000)
})