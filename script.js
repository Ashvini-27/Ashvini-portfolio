// Select all navigation links
const navLinks = document.querySelectorAll('.nav-links a');
const navbarHeight = document.querySelector('.navbar').offsetHeight;

// 1. Smooth Scrolling on Click
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    });
});

// 2. Highlight Active Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (pageYOffset >= (sectionTop - navbarHeight - 50)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});