const tecnologias = ['React', 'Angular', 'NestJS'];

// Desestructuramos por posición
const [frontend, , backend] = tecnologias;

console.log(frontend); // 'React'
console.log(backend);  // 'NestJS' (notá que saltamos el segundo con una coma)


// todo: el operador Rest (...)
// para separar el primer elemento y guardar el resto en un nuevo arreglo
const notas = [10, 8, 9, 7, 6];
const [laMejor, ...elResto] = notas;

console.log(laMejor); // 10
console.log(elResto); // [8, 9, 7, 6]