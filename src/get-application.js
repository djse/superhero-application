function getApplication(formData) {
    const cape = formData.get('wear-cape') === 'yes';
    const powerLevel = parseInt(formData.get('power-level'));
    
    const applicant = {
        name: formData.get('name'),
        superpower: formData.get('power-description'),
        wearCape: cape,
        areaToSave: formData.get('area-to-save'),
        powerLevel: powerLevel,
        transport: formData.getAll('transport'),
    };
    return applicant;
}

export default getApplication;