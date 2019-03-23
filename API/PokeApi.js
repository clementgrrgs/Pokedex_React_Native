
export function getFullPokedex () {
    const url = 'https://pokeapi.co/api/v2/pokedex/2/';
    return fetch(url)
        .then((response) => response.json())
        .catch(((error) => console.error(error)))

}