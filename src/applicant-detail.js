import applicantApi from './applicant-api.js';

const name = document.getElementById('name');
const powerDescription = document.getElementById('power-description');
const cape = document.getElementById('cape');
const areaToSave = document.getElementById('area-to-save');
const powerLevel = document.getElementById('power-level');
const transport = document.getElementById('transport');

const applicant = applicantApi.get();
console.log(applicant);
if(!applicant) {
    window.location = './';
}

name.textContent = applicant.name;
powerDescription.textContent = applicant.superpower;
if(applicant.wearCape) {
    cape.textContent = 'Yes';
} 
else if(applicant.wearCape === false)
{
    cape.textContent = 'No';
} else {
    cape.textContent = '';
}

areaToSave.textContent = applicant.areaToSave;
powerLevel.textContent = applicant.powerLevel;
transport.textContent = applicant.transport.join(', ');

