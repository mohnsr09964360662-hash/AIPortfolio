// =============== MOBILE NAVIGATION ===============
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// =============== TYPING EFFECT ===============
const texts = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Generative AI"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;
const typingTextElement = document.querySelector('.typing-text');

function type() {
    if (count === texts.length) {
        count = 0;
    }
    
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    typingTextElement.textContent = letter;

    let typeSpeed = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (texts.length) setTimeout(type, newTextDelay + 250);
});

// =============== SCROLL REVEAL ANIMATION ===============
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// =============== COUNTER ANIMATION ===============
const counters = document.querySelectorAll('.counter');
let started = false;

function animateCounters() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;
    
    const elementTop = aboutSection.getBoundingClientRect().top;
    
    if (elementTop < window.innerHeight && !started) {
        counters.forEach(counter => {
            counter.innerText = '0';
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                const increment = target / 50;

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
        started = true;
    }
}
window.addEventListener("scroll", animateCounters);


// =============== PORTFOLIO FILTERING ===============
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.classList.contains(filterValue)) {
                card.style.display = 'flex';
                // Trigger reflow for animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});
