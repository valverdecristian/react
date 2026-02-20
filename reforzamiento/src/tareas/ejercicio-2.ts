const useAuth = (name:string) => {
    return [
        name,
        (newName:string) => console.log(`Usuario ${newName} ha iniciado sesion`)
    ] as const;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [name, newName] = useAuth('Cristian');

newName('Jorge');

console.log(name);