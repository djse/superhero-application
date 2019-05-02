import applicantApi from './applicant-api.js';

const name = document.getElementById('name');
const powerDescription = document.getElementById('power-description');
const cape = document.getElementById('cape');
const areaToSave = document.getElementById('area-to-save');
const powerLevel = document.getElementById('power-level');
const transport = document.getElementById('transport');

const searchParams = new URLSearchParams(window.location.search);
const applicantName = searchParams.get('name');

// Get applicant info from local storage
const applicant = applicantApi.get(applicantName);

// Check if applicant exists and go back to index.html if not
if(!applicant) {
    window.location = './';
}

// Display applicant details from local storage
name.textContent = applicant.name;
powerDescription.textContent = applicant.superpower;

if(applicant.wearCape) {
    cape.textContent = 'Yes';
} else if(applicant.wearCape === false) {
    cape.textContent = 'No';
} else {
    cape.textContent = '';
}

areaToSave.textContent = applicant.areaToSave;
powerLevel.textContent = applicant.powerLevel;
transport.textContent = applicant.transport.join(', ');

