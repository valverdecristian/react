// todo: desectructurar es desarmar
const persona = {
    nombre: 'Cristian',
    apellido: 'Valverde',
    edad: 31,
}

const {nombre, apellido, edad} = persona;

// renombrar la property con otra variable
const {nombre: name, apellido: lastName, edad: age} = persona

console.log(nombre, apellido, edad);
console.log(name, lastName, age);