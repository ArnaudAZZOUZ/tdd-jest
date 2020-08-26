const sum = require('../src/sum');
const multiply = require('../src/multiply');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('add  a letter return error', () => {
    expect(sum(1, "u")).toBe("error number");
    expect(sum("n","l")).toMatch
});

test('2 multiply 3 to get 6', () => {
    expect(multiply(2,3)).toEqual(6);
    });
