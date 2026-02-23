import { render } from '@testing-library/react';
import { describe, test } from "vitest";
import MyAwesomeApp from './MyAwesomeApp'

//! necesitamos una dependencia adicional. Testing Library (evaluan los componentes)
describe('MyAwesomeApp', ()=> {
    test('should render firstName and lastName', () => {
        const {container} = render(<MyAwesomeApp />)
        console.log(container.innerHTML);
        
    })
})