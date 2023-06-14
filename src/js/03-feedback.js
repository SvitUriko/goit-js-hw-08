import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = form.elements.email;
const messageEl = form.elements.message;

function saveFormDataToLocalStorage() {
    const formData = {
        email: emailEl.value,
        message: messageEl.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', throttle(saveFormDataToLocalStorage, 500));

const storedFormData = localStorage.getItem('feedback-form-state');
if (storedFormData) {
    const {email, message} = JSON.parse(storedFormData);
    emailEl.value = email;
    messageEl.value = message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {email, message} = event.currentTarget.elements;

    if(email.value === "" || message.value === ""){
        alert('All fields must be filled');
    } else { 
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

        localStorage.removeItem('feedback-form-state');
        
        form.reset();
    }  
});
