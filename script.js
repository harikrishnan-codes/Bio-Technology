// hamburger js 

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}));






// hero slide js

const slides = document.querySelectorAll(".hero-slide");

let index = 0;

function showSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");
}

setInterval(showSlide, 5000);








// stats js

const section = document.querySelector(".impact-section");
const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {

            const increment = target / 120;

            count += increment;

            if (count < target) {
                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCounter);
            }
            else {
                counter.innerText = target;
            }

        };

        updateCounter();

    });

}

function resetCounters() {

    counters.forEach(counter => {
        counter.innerText = "0";
    });

}

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            startCounter();
        }
        else {
            resetCounters();
        }

    });

}, { threshold: 0.5 });

observer.observe(section);











// teams js

const observerOptions = {
    threshold: 0.2
};

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.animated-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    observer1.observe(card);
});










const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target;

            const bar = card.querySelector('.progress-fill');
            if (bar) bar.style.width = bar.getAttribute('data-width');

            const valueDisplay = card.querySelector('.stat-value');
            if (valueDisplay) {
                const target = parseInt(valueDisplay.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;

                const updateCount = () => {
                    if (current < target) {
                        current += increment;
                        valueDisplay.innerText = Math.ceil(current);
                        setTimeout(updateCount, 20);
                    } else {
                        valueDisplay.innerText = target;
                    }
                };
                updateCount();
            }

            statsObserver.unobserve(card);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});









// testimonial js 

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

let index1 = 0;

function showTestimonial(i) {

    testimonials.forEach(t => t.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    testimonials[i].classList.add("active");
    dots[i].classList.add("active");

}

function autoSlide() {

    index1++;

    if (index1 >= testimonials.length) {
        index1 = 0;
    }

    showTestimonial(index1);

}

setInterval(autoSlide, 4000);









// faq js 

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            }
        });

        faqItem.classList.toggle('active');

        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});