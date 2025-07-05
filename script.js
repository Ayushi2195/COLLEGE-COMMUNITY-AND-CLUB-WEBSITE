// Mobile menu toggle
const mobileMenuButton = document.querySelector('.md\:hidden');
const navLinks = document.querySelector('.md\:flex');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-16');
    navLinks.classList.toggle('left-0');
    navLinks.classList.toggle('right-0');
    navLinks.classList.toggle('bg-gray-900');
    navLinks.classList.toggle('p-4');
    navLinks.classList.toggle('space-y-4');
    navLinks.classList.toggle('space-x-8');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (!navLinks.classList.contains('hidden')) {
                mobileMenuButton.click();
            }
        }
    });
});

// Form submission handling
const joinForm = document.getElementById('joinForm');
if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Get form data
        const formData = new FormData(joinForm);
        const formObject = {};
        formData.forEach((value, key) => {
            if (formObject[key]) {
                if (Array.isArray(formObject[key])) {
                    formObject[key].push(value);
                } else {
                    formObject[key] = [formObject[key], value];
                }
            } else {
                formObject[key] = value;
            }
        });
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for joining our community! We\'ll be in touch soon.');
        joinForm.reset();
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        // Here you would typically send the data to a server
        console.log('Contact form submitted:', formObject);
        // Show success message
        alert('Sent message!');
        contactForm.reset();
    });
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate-fadeInUp');
        }
    });
};

// Gallery filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Filter gallery items
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active', 'bg-amber-500', 'text-gray-900'));
                filterButtons.forEach(btn => btn.classList.add('bg-gray-800', 'text-white', 'hover:bg-gray-700'));
                
                // Add active class to clicked button
                this.classList.add('active', 'bg-amber-500', 'text-gray-900');
                this.classList.remove('bg-gray-800', 'text-white', 'hover:bg-gray-700');
                
                const filterValue = this.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hidden');
                        item.style.animation = 'fadeIn 0.5s ease-in-out';
                    } else {
                        item.style.animation = 'fadeOut 0.3s ease-in-out';
                        // Wait for animation to complete before hiding
                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 300);
                    }
                });
                
                // Trigger reflow for smooth animation
                void galleryItems[0].offsetWidth;
            });
        });
    }
    
    // Initialize lightbox/modal for gallery images (can be expanded)
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // You can add a lightbox/modal here if needed
            console.log('Image clicked:', this.src);
        });
    });
});

// Add animation class to elements when they come into view
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize animations
animateOnScroll();

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '&uarr;';
backToTopButton.className = 'fixed bottom-8 right-8 w-12 h-12 bg-amber-500 text-white rounded-full shadow-lg flex items-center justify-center text-2xl opacity-0 invisible transition-all duration-300';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modal for Join Us Now
const openJoinModalBtn = document.getElementById('openJoinModal');
const joinModal = document.getElementById('joinModal');
const closeJoinModalBtn = document.getElementById('closeJoinModal');
const joinFormModal = document.getElementById('joinFormModal');

if (openJoinModalBtn && joinModal && closeJoinModalBtn) {
    openJoinModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        joinModal.classList.remove('hidden');
    });
    closeJoinModalBtn.addEventListener('click', function() {
        joinModal.classList.add('hidden');
    });
    // Close modal when clicking outside the modal content
    joinModal.addEventListener('click', function(e) {
        if (e.target === joinModal) {
            joinModal.classList.add('hidden');
        }
    });
}
if (joinFormModal) {
    joinFormModal.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sent message!');
        joinFormModal.reset();
        joinModal.classList.add('hidden');
    });
}
