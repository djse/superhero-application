import getApplication from './get-applicant.js';
const form = document.getElementById('superhero-application');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(getApplication(formData));
});