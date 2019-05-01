const applicantApi = {
    save(applicants) {
        const json = JSON.stringify(applicants);
        localStorage.setItem('applicants', json);
    },
    get() {
        const json = localStorage.getItem('applicants');
        const applicants = JSON.parse(json);

        return applicants;
    },
    getAll() {
        const json = localStorage.getItem('applicants');
        
        let applicants = JSON.parse(json);
        if(!applicants) {
            applicants = [];
        }

        return applicants;
    }
};

export default applicantApi;