import applicantApi from './applicant-api.js';

const tbody = document.getElementById('applicants');
const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const tr = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', applicant.name);
    link.href = 'applicant-detail.html?' + searchParams.toString();
    link.textContent = applicant.name;
    nameCell.appendChild(link);
    tr.appendChild(nameCell);

    const superpowerCell = document.createElement('td');
    superpowerCell.textContent = applicant.superpower;
    tr.appendChild(superpowerCell);

    const wearCapeCell = document.createElement('td');
    if(applicant.wearCape) {
        wearCapeCell.textContent = 'Yes';
    } 
    else {
        wearCapeCell.textContent = 'No';
    }
    tr.appendChild(wearCapeCell);

    const areaToSaveCell = document.createElement('td');
    areaToSaveCell.textContent = applicant.areaToSave;
    tr.appendChild(areaToSaveCell);

    const powerLevelCell = document.createElement('td');
    powerLevelCell.textContent = applicant.powerLevel;
    tr.appendChild(powerLevelCell);

    const transportCell = document.createElement('td');
    let transportList = '';
    if(applicant.transport) {
        transportList = applicant.transport.join(', ');
    }
    transportCell.textContent = transportList;
    tr.appendChild(transportCell);

    tbody.appendChild(tr);
}
