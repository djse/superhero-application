function getApplication(formData) {
    const cape = formData.get('wear-cape') === 'yes';
    const powerLvl = parseInt(formData.get('power-level'));
    
    const applicant = {
        name: formData.get('name'),
        superpower: formData.get('power'),
        wearCape: cape,
        areaToSave: formData.get('area-to-save'),
        powerLevel: powerLvl,
        transportation: formData.getAll('transport'),
    };
    return applicant;
}

export default getApplication;