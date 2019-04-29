import getApplication from '../src/get-applicant.js';
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
