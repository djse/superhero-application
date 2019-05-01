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