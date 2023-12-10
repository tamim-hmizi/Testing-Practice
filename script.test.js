import {
  capitalize,
  calculator,
  caesarCipher,
  reverseString,
  analyzeArray,
} from "./script";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("calculator add", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("calculator divide", () => {
  expect(calculator.divide(1, 1)).toBe(1);
});

test("calculator subtract", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("calculator multiply", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("caesarCipher", () => {
  expect(caesarCipher("hello",3)).toBe('khoor');
});

test("reverseString", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
