import { heroes, type Hero } from "../assets/data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id == id;
    })
    return hero;
}

console.log(getHeroById(1));
