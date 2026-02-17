// objetos literales como constantes
// usar interfaces para los objetos
const persona: IPerson = {
    nombre: 'Cristian',
    apellido: 'Valverde',
    edad: 31,
}


// se puede cambiar las properties, ya que no estoy cambiando hacia donde apunta
persona.nombre = 'Peter'
persona.apellido = 'Parker'

const persona2 = structuredClone(persona);
persona2.nombre = 'Mario'
persona2.apellido = 'Vazquez'

console.log(persona);
console.log(persona2);

interface IPerson {
    nombre: string,
    apellido: string,
    edad: number
}