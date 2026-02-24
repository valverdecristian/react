import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";

describe('ItemCounter', () => {

    test('should render with default values', () => {
        const name = 'Test item';
        render(<ItemCounter name={name}/>)
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    })

    test('should render with custom quantity', () => {

        const name = 'Control de Nintendo';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity}/>)
        expect(screen.getByText(quantity)).toBeDefined();
    })

    test('should increase count when +1 button is clicked', () => {
        render(<ItemCounter name="Test" quantity={1}/>)
        const [add] = screen.getAllByRole('button');
        fireEvent.click(add);
        expect(screen.getByText('2')).toBeDefined();
    })

    test('should decrease count when -1 button is clicked and count > 1', () => {
        render(<ItemCounter name="Test" quantity={3}/>)
        const [, substract] = screen.getAllByRole('button');
        fireEvent.click(substract);
        expect(screen.getByText('2')).toBeDefined();
    })

    test('should not decrease count when -1 button is clicked and count is 1', () => {
        render(<ItemCounter name="Test" quantity={1}/>)
        const [, substract] = screen.getAllByRole('button');
        fireEvent.click(substract);
        expect(screen.getByText('1')).toBeDefined();
    })
})