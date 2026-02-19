/*
Crear una funcion llamada getHeroesByOwner => Hero[] [devuelve siempre un arreglo]
Filtrar heroes por su propietario
@param Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeracion Owner
@returns Array de heroes pertenecientes al propietario
*/

import { heroes, Owner, type Hero } from "../assets/data/heroes.data";

// EJECUTAR EN MAIN console.log(getHeroesByOwner(Owner.Marvel));

const heroesByOwner: Hero[] = [];

export const getHeroesByOwner = (owner:string): Hero[] | undefined => {
    heroes.find((hero) => {
        if (hero.owner == owner) {
            heroesByOwner.push(hero)
        }
    })
    return heroesByOwner;
}

console.log(getHeroesByOwner(Owner.DC));

// otra opcion es usar filter