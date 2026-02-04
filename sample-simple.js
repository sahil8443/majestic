// ============================================
// MAJESTIC REALTIES - SIMPLIFIED JAVASCRIPT
// ============================================

// 1. FAQ ACCORDION - Toggle question/answer
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQs
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
}

// 2. SMOOTH SCROLL NAVIGATION
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 3. FORM SUBMISSION
function initForm() {
    const form = document.querySelector('.career-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = form.querySelector('input[placeholder="Your Full Name"]')?.value;
            const email = form.querySelector('input[placeholder="Email Address"]')?.value;
            
            // Show message and reset
            alert('Thank you! We will contact you soon.');
            form.reset();
        });
    }
}

// 4. INITIALIZE ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initNavigation();
    initForm();
});
