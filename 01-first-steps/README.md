## 🛡️ React StrictMode

Es una "etiqueta de advertencia" que envuelve a tu aplicación para detectar problemas potenciales durante el desarrollo.

**Doble Renderizado (Solo en Desarrollo)**: React renderizará tus componentes dos veces. Esto lo hace para detectar funciones impuras o efectos secundarios que podrían causar bugs difíciles de encontrar. Si ves que un console.log aparece dos veces, es por esto.

**Verificación de Efectos**: Ejecuta los efectos (useEffect) dos veces (montar -> desmontar -> montar). Esto te obliga a escribir siempre la función de limpieza (cleanup), asegurando que no queden fugas de memoria, algo vital si venís de manejar suscripciones en Angular.

**Detección de APIs Obsoletas**: Te avisará en la consola si estás usando métodos antiguos o "deprecados" que React planea eliminar en futuras versiones.

**Asegura el Futuro**: Ayuda a que tu aplicación sea compatible con funciones avanzadas como el Concurrent Rendering, que permite a React pausar y reanudar actualizaciones de la interfaz.


### Tips

**Valores Booleanos**: no generan nada de codigo interno en react, para que muestre su valor hay que usar to string o un ternario.


## ⚛️ React Testing Library (RTL)

A diferencia de otras herramientas que prueban "cómo está hecho" el componente (las entrañas), RTL se enfoca en probar cómo lo usa una persona real.

### Instalación

```bash
npm install --save-dev @testing-library/react @testing-library/dom
```

En `vite.config.ts` modificar lo siguiente:

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
```

### 🛠️ Las 3 piezas del rompecabezas

Para testear un componente, usamos principalmente tres herramientas:

1. ``render``: Es la función que "monta" tu componente en un DOM virtual para que podamos analizarlo.
2. ``screen``: Es un objeto que nos da acceso a todo lo que el usuario "ve". Tiene métodos de búsqueda (queries) como: `getByText`, `getByRole`.
   * 💡 **Queries prioritarias**: Siempre intentá buscar por Role o Text antes que por clases de CSS o IDs, ya que eso hace que tus tests sean más accesibles (ayudan a mejorar la accesibilidad de tu web).
3. ``fireEvent`` / ``user-event``: Son los encargados de simular las acciones del usuario, como hacer click, escribir en un input o enviar un formulario.


### 📝 Ejemplo de Estructura (Patrón AAA)

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('Pruebas en <MyAwesomeApp />', () => {
    
    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
        // 1. Arrange: Renderizamos el componente
        render( <MyAwesomeApp /> );

        // 2. Act: (En este caso no hay acción, solo validamos lo inicial)

        // 3. Assert: Buscamos el texto en la pantalla
        expect( screen.getByText('Hola, soy Goku') ).toBeTruthy();
    });
});
```


### 🔍 Tipos de Consultas (¿Cuál usar?)

No todas las búsquedas de screen se comportan igual. Elegir la correcta te evita falsos positivos en los tests:

``getBy...``: Es la más común. Si no encuentra el elemento, el test falla inmediatamente. Es ideal para elementos que sabés que deben estar ahí desde el inicio.

``queryBy...``: Si no encuentra el elemento, devuelve null en lugar de romper el test. Es la herramienta perfecta para validar que algo no está en pantalla (ej: expect(screen.queryByText('Error')).toBeNull()).

``findBy...``: Es la versión asíncrona. Devuelve una promesa y espera un tiempo (por defecto 1000ms) a que el elemento aparezca. Se usa con await para elementos que dependen de una API o un setTimeout.