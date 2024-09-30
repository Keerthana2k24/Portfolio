// Responsive Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});
// Skill Bar Animation
window.addEventListener('scroll', () => {
    let skills = document.querySelectorAll('.skill-percentage');
    skills.forEach(skill => {
        let percentage = skill.getAttribute('data-percent');
        let skillPosition = skill.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (skillPosition < screenPosition) {
            skill.style.width = percentage + '%';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwkuZvMvyl9OexNZJMHCXdCRjSh0_XnKID4-VnRH2QMQ0KVqifA5Kf-LKLohuW4EnxcgQ/exec'; // Replace with the Web App URL you got after deploying the script
    const form = document.querySelector('form'); // Select the form

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert('Thank you! Your message has been sent.');
                form.reset(); // Reset the form fields after successful submission
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('There was an error sending your message. Please try again.');
            });
    });
});


