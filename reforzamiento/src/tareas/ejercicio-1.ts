interface Proyecto {
    id: number,
    nombre: string,
    tecnologia: string,
    completado: boolean
}

const proyectos: Proyecto[] = [
    {
        id: 1,
        nombre: 'Sala de juegos',
        tecnologia: 'Angular',
        completado: true
    },
    {
        id: 2,
        nombre: 'Red Social',
        tecnologia: 'Nestjs',
        completado: true
    },
    {
        id: 3,
        nombre: 'Restaurante App',
        tecnologia: 'Ionic',
        completado: false
    },
    {
        id: 4,
        nombre: 'Clinica',
        tecnologia: 'Angular',
        completado: false
    },
]

const getNameTecnology = (nombre:string): Proyecto[] => {
    const filtro = proyectos.filter(proyecto => proyecto.tecnologia == nombre);
    return filtro
}

const result = getNameTecnology('Angular');

// 1. Desestructuración de Arreglo para obtener el primer elemento
// 2. Desestructuración de Objeto para obtener solo el nombre
const [{nombre}] = result;

console.log(nombre);
