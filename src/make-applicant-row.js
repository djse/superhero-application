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

const makeApplicantRow = {
    makeNameCell: makeNameCell,
    convertBoolean: convertBoolean,
    makeListCell: makeListCell,
    makeTextCell: makeTextCell
};

export default makeApplicantRow;