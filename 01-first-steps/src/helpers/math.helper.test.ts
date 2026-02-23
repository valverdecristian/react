import { expect, test, describe } from 'vitest';
import { add, divide, multiply, substract } from "./math.helper"; //

describe('Nombre del componente', () => {
    
    test('add debe retornar la suma de dos números', () => {
        //! Arrange
        const a = 10;
        const b = 5;

        //! Act
        const result = add(a, b); //

        //! Assert
        expect(result).toBe(a+b);
    });

    test('substract debe retornar la resta de dos números', () => {
        const result = substract(10, 5);
        expect(result).toBe(5);
    });

    test('multiply debe retornar el producto de dos números', () => {
        const result = multiply(3, 3);
        expect(result).toBe(9);
    });

    test('divide debe retornar el cociente de dos números', () => {
        const result = divide(10, 2);
        expect(result).toBe(5);
    });
});