import applicantApi from './applicant-api.js';
import makeApplicantRow from './make-applicant-row.js';

const tbody = document.getElementById('applicants');
const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const tr = document.createElement('tr');
    
    const nameCell = makeApplicantRow.makeNameCell(applicant.name);
    const superpowerCell = makeApplicantRow.makeTextCell(applicant.superpower);
    const wearCapeCell = makeApplicantRow.makeTextCell(makeApplicantRow.convertBoolean(applicant.wearCape));
    const areaToSaveCell = makeApplicantRow.makeTextCell(applicant.areaToSave);
    const powerLevelCell = makeApplicantRow.makeTextCell(applicant.powerLevel);
    const transportCell = makeApplicantRow.makeListCell(applicant.transport);
    
    tr.appendChild(nameCell);
    tr.appendChild(superpowerCell);
    tr.appendChild(wearCapeCell);
    tr.appendChild(areaToSaveCell);
    tr.appendChild(powerLevelCell);
    tr.appendChild(transportCell);
    
    tbody.appendChild(tr);
}