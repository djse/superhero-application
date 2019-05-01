import applicantApi from '../src/applicant-api.js';

const test = QUnit.test;
QUnit.module('applicant api');

test('round trip of super hero data', assert => {
    localStorage.removeItem('applicants');
    //arrange
    const applicant = { name: 'Jack' };
    //act
    applicantApi.save(applicant);
    const result = applicantApi.get();
    //assert
    assert.deepEqual(result, applicant);
});

test('return an empty array if there are no applicants', assert => {
    //arrange
    localStorage.removeItem('applicants');
    const expected = [];
    //act
    const applicants = applicantApi.getAll();
    //assert
    assert.deepEqual(applicants, expected);
});

test('Given two applicants getAll returns array of applicants', assert => {
    //arrange
    localStorage.removeItem('applicants');
    const applicant1 = { name: 'Danny' };
    const applicant2 = { name: 'Susan' };
    applicantApi.save(applicant1);
    applicantApi.save(applicant2);
    const expected = [applicant1, applicant2];
    //act
    const applicants = applicantApi.getAll();
    //assert
    assert.deepEqual(applicants, expected);
});