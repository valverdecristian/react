import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock('./shopping-cart/ItemCounter', () => ({
    default: () => <div data-testid="ItemCounter"/>
}))

describe('App', () => {
    test('should match with snapshot', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    })

    test('should render the correct number of ItemCounter components', () => {
        render(<App />);

        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(3);
    })
})