const loginBtn = document.getElementById('loginBtn');
const signupModal = document.getElementById('signupModal');
const closeModal = document.getElementById('closeModal');
const signupForm = document.getElementById('signupForm');

function openModal() {
    signupModal.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeModalFn() {
    signupModal.hidden = true;
    document.body.style.overflow = '';
}

loginBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFn);
signupModal.addEventListener('click', (event) => {
    if (event.target === signupModal) {
        closeModalFn();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !signupModal.hidden) {
        closeModalFn();
    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Vervang het formulier met bedank-bericht
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = '<h2>Bedankt!</h2><p style="text-align: center; padding: 2rem; font-size: 1.1rem;">Bedankt en tot snel!</p>';
    
    // Sluit modal na 3 seconden
    setTimeout(() => {
        signupForm.reset();
        closeModalFn();
        // Herstel het originele formulier
        location.reload();
    }, 3000);
});