# 🚀 Ultimate React

A diferencia de Angular, que es un Framework "all-in-one" (trae routing, peticiones HTTP y formularios integrados), React es técnicamente una Librería enfocada puramente en la UI.

* ¿Qué podemos realizar? Desde SPAs (Single Page Applications) ultrarrápidas hasta aplicaciones web masivas (como Facebook o Netflix).
* La filosofía: Todo es un componente. Si en Angular pensabas en módulos, acá pensás en funciones puras que devuelven HTML (JSX).

## 🧩 Los Pilares Fundamentales

### JSX (JavaScript XML)

No es un template string ni HTML real. Es una extensión de sintaxis que permite escribir la estructura de la UI dentro de la lógica de JavaScript.

💡 Tip Profesional: Recordá que en JSX, class pasa a ser className y for pasa a ser htmlFor, porque son palabras reservadas de JS.

### Componentes Funcionales

React es 100% funciones. Un componente es una función que recibe props y devuelve JSX.

### State (Estado) y Props

Props: Son la forma en que pasás datos de un padre a un hijo (son de solo lectura, como los @Input en Angular).

State: Es la memoria del componente. Cuando el estado cambia, React vuelve a renderizar el componente automáticamente.

## 🧠 El Modelo Mental: Virtual DOM

Este es el "secreto" de su velocidad. React no actualiza todo el sitio cuando algo cambia; crea una copia ligera del DOM en memoria, compara qué cambió y solo aplica ese pequeño cambio en el navegador real.


## Para trabajar con React

Instalar
* VSCode
* Node.js
* Postman
* Docker


## Estructura de un Componente

1) Creamos una funcion
2) Retornamos un HTML (los corchetes son expresiones de js)
3) Opcional - Creamos una pieza de estado usando un Hook (se debe importar de React)
4) Opcional - Crear una funcion controladora (en este caso el click)

```js
export function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => { 
        setCount(count + 1);
    }

    return (
        <div>
            <p>Haz hecho click {count} veces</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
```