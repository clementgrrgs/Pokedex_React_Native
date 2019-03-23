
export function getSinglePokemon (id) {
    const url = 'https://pokeapi.co/api/v2/pokemon/'+id+'/'
    return fetch(url)
        .then((response) => response.json())
        .catch(((error) => console.error(error)))
}


export function getFlavorPokemon (id) {
    const url = 'https://pokeapi.co/api/v2/pokemon-species/'+id+'/'
    return fetch(url)
        .then((response) => response.json())
        .catch(((error) => console.error(error)))
}
