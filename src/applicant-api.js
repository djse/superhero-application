const applicantApi = {
    key: 'applicants',
    save(applicant) {
        const applicants = applicantApi.getAll();
        applicants.push(applicant);
        const json = JSON.stringify(applicants);
        localStorage.setItem(applicantApi.key, json);
    },
    get(name) {
        const applicants = applicantApi.getAll();

        for(let i = 0; i < applicants.length; i++) {
            const applicant = applicants[i];
            if(applicant.name === name) {
                return applicant;
            }
        }
    },
    getAll() {
        const json = localStorage.getItem(applicantApi.key);
        
        let applicants = JSON.parse(json);
        if(!applicants) {
            applicants = [];
        }

        return applicants;
    }
};

export default applicantApi;