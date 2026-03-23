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
    const emailValue = document.getElementById('emailInput').value;
    alert(`Bedankt voor je aanmelding ${emailValue}`);
    signupForm.reset();
    closeModalFn();
});