const assert = require(`assert`);
const calculateNumber = require('./0-calcul');

describe("calculateNumber", () => {
    it("floating point number", () => {
	assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    });

    it("round a down", () => {
    	assert.strictEqual(calculateNumber(1.4, 2.0), 3);
    });

    it("round b down", () => {
    	assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    });

    it("round down both a and b", () => {
	assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });

    it("round up a", () => {
    	assert.strictEqual(calculateNumber(1.5, 2.0), 4);
    });

    it("round up  b", () => {
    	assert.strictEqual(calculateNumber(1.0, 2.5), 4);
    });

    it("round up both a and b", () => {
    	assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    })
});
