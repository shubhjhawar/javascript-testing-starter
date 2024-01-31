import { describe, test, it, expect} from 'vitest';
import { max, fizzBuzz, calculateAverage, factorial} from '../src/intro';

describe('max', () => {
    it("should return the first argument if it is greater", () => {
        // arrange
        const a = 2;
        const b = 1;

        // act
        const result = max(a, b);

        // assert
        expect(result).toBe(2);
    })

    it("should return the second arument if it is greater", () => {
        expect(max(1,2)).toBe(2);
    })

    it("should return the fisrt arument if both are equal", () => {
        expect(max(2,2)).toBe(2);
    })
})

describe("fizzBuzz", () => {
    it("should return FizzBuzz if number is divisible by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })
    it("should return Fizz if number is divisible by 3", () => {
        expect(fizzBuzz(9)).toBe("Fizz")
    })
    it("should return Buzz if number is divisible by 5", () => {
        expect(fizzBuzz(20)).toBe("Buzz")
    })
    it("should return the number itself if it is not divisible by 3 or 5", () => {
        expect(fizzBuzz(14)).toBe("14")
    })
})


describe("calculate average", () => {
    it('should return not a number if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN)
    })

    it("should calculate the average of an array with a single element", () => {
        expect(calculateAverage([1])).toBe(1)
    })

    it("should calculate the average of an array with a two elements", () => {
        expect(calculateAverage([1, 2])).toBe(1.5)
    })

    it("should calculate the average of an array with a three elements", () => {
        expect(calculateAverage([1, 2, 3])).toBe(2)
    })
})

describe("factorial", () => {
    it("should return NaN if no number is passed", () => {
        expect(factorial()).toBeUndefined()
    })

    it("should return 1 when asked about factorial of 0", () => {
        expect(factorial(0)).toBe(1);
    })

    it("should return 1 when asked about factorial of 1", () => {
        expect(factorial(1)).toBe(1);
    })

    it("should return facctorial of 2 as 2", () => {
        expect(factorial(2)).toBe(2);
    })

    it("should return facctorial of 3 as 6", () => {
        expect(factorial(3)).toBe(6);
    })

    it("should return facctorial of 4 as 24", () => {
        expect(factorial(4)).toBe(24);
    })

    it("should return undefined if no number is negative", () => {
        expect(factorial(-20)).toBeUndefined()
    })
})