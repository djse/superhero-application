import applicantApi from './applicant-api.js';

const tbody = document.getElementById('applicants');
const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const tr = document.createElement('tr');
    
    const nameCell = makeNameCell(applicant.name);
    tr.appendChild(nameCell);

    const superpowerCell = makeTextCell(applicant.superpower);
    tr.appendChild(superpowerCell);

    const wearCapeCell = makeTextCell(convertBoolean(applicant.wearCape));
    
    tr.appendChild(wearCapeCell);

    const areaToSaveCell = makeTextCell(applicant.areaToSave);
    tr.appendChild(areaToSaveCell);

    const powerLevelCell = makeTextCell(applicant.powerLevel);
    tr.appendChild(powerLevelCell);

    const transportCell = makeListCell(applicant.transport);
    tr.appendChild(transportCell);

    tbody.appendChild(tr);
}

function makeNameCell(name) {
    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', name);
    link.href = 'applicant-detail.html?' + searchParams.toString();
    link.textContent = name;
    nameCell.appendChild(link);
    return nameCell;
}

function convertBoolean(bool) {
    if(bool) {
        return 'Yes';
    } 
    return 'No';
}

function makeListCell(list) {
    let stringFromList = '';
    if(list) {
        stringFromList = list.join(', ');
    }
    const listCell = makeTextCell(stringFromList);
    return listCell;
}

function makeTextCell(text) {
    const textCell = document.createElement('td');
    textCell.textContent = text;
    return textCell;
}