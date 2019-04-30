import getApplication from '../src/get-application.js';
const test = QUnit.test;

test('Test form data input', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'DJSE',
        superpower: 'js form data',
        wearCape: false,
        areaToSave: 'NW Portland',
        powerLevel: 3,
        transport: ['MAX', 'flight']
    };
    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('power-description', expected.superpower);
    formData.set('wear-cape', 'no');
    formData.set('area-to-save', expected.areaToSave);
    formData.set('power-level', '3');
    formData.set('transport', expected.transport[0]);
    formData.append('transport', expected.transport[1]);
    //Act 
    // Call the function you're testing and set the result to a const
    const result = getApplication(formData);
    //Assert
    assert.deepEqual(result, expected);
});

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

test('round trip of super hero data', assert => {
    //arrange
    const applicant = { name: 'Jack' };
    //act
    applicantApi.save(applicant);
    const result = applicantApi.get();
    //assert
    assert.deepEqual(result, applicant);
});