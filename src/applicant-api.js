const applicantApi = {
    save(applicant) {
        const json = JSON.stringify(applicant);
        localStorage.setItem('applicant', json);
    },
    get() {
        const json = localStorage.getItem('applicant');
        const applicant = JSON.parse(json);

        return applicant;
    }
};

export default applicantApi;