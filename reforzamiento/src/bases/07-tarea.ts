// Requisitos
// La función debe llamarse useState.
// Debe retornar un arreglo con dos elementos:
// #1 - Un string (el valor inicial).
// #2 - Una función anónima de flecha que:
// Recibe un string.
// Imprime ese string en consola.

const useState = (value:string) => {
    return [
        value,
        (newValue:string) => {
            console.log(newValue);
        }
    ] as const;
}

// useState es conocido como un Hook
// eslint-disable-next-line react-hooks/rules-of-hooks
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"