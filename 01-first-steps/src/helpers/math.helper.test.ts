import { expect, test } from 'vitest';
import { add } from './math.helper'

test('descripcion de la prueba', () => {
    //! Arrange
    const a = 1;
    const b = 1;

    //! Act
    const result = add(a,b);
    
    //! Assert
    expect(result).toBe(a+b);
})