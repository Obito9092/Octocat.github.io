// script.js

// Portfolio Functionality
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Show details for the selected portfolio item
        const details = item.querySelector('.details');
        details.classList.toggle('show');
    });
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (!valid) {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
});

// Admin Login
const loginForm = document.querySelector('#admin-login');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.querySelector('input[name="username"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        // Replace with actual admin credentials
        const adminUsername = 'admin';
        const adminPassword = 'password';

        if (username === adminUsername && password === adminPassword) {
            alert('Login successful!');
            // Redirect to admin dashboard or other actions
        } else {
            alert('Invalid credentials.');
        }
    });
}