// todo: funcion tradicional: util si se necesita el this
function greet(name:string): string {
    return `Hola ${name}`
}

// todo: funcion flecha: estandar en React, con cuerpo se usa las {} y return, sino retorno implicito
const greet2 = (name: string): string => `Hola ${name}`;

console.log(greet("Cristian"));
console.log(greet2("Juan"));

// Con retorno implicito (se envuelve en parentesis)
const getUser = () => ({
        uid: 'ABC-123',
        username: 'El_Papi23',
    })

// con los parentesis se imprime los resultados, sino la definición de la funcion.
console.log(getUser());


// todo: pasar por referencia
const nombres = ['Cristian', 'Juan', 'Luis'];

// Forma larga (con flecha)
nombres.forEach(nombre => console.log(nombre));

// Forma abreviada (Shorthand)
// Como forEach entrega un valor y console.log recibe un valor, "matamos al intermediario"
nombres.forEach(console.log);