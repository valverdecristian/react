import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import MyAwesomeApp from './MyAwesomeApp'

//! necesitamos una dependencia adicional. Testing Library (evaluan los componentes)
describe('MyAwesomeApp', ()=> {
    test('should render firstName and lastName', () => {
        const {container} = render(<MyAwesomeApp />)

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toBe('Cristian');
        expect(h3?.innerHTML).toContain('Valverde');
    })

    test('should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp />)
        screen.debug();
        const h1 = screen.getByTestId('first-name');
        expect(h1.innerHTML).toContain('Cristian');
    })

    test('should match snapshot', () => {
        const {container} = render(<MyAwesomeApp />)
        
        expect(container).toMatchSnapshot();
    })
})