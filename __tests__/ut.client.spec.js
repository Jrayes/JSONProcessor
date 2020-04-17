const client = require('../client');
const records = require('./records');

//test the filter output function.
describe("Unit tests..", function() {
    
    it('tests the filterResults function.', function (done) {
            expect(records.records.length).toEqual(6);
            results = client.filterResults(records.records);
            expect(results.length).toEqual(4);
            //TODO ensure each balance is greater than 200
            //and each registered is after Jan 1.
            done();
    });

});
