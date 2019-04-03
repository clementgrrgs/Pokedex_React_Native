const initialUserState = {
    CurrentUser : {
        _id: "",
        pseudo: "",
        nbPokemon:0,
        friends: [],
        pokemons: []
    }
}


function toggleGotcha(state = initialPokemonState, action){
    let nextState
    switch (action.type) {
        case 'GOTCHA_POKEMON':
            const catchPokemon = state.CurrentUser.pokemons.findIndex(item => item.name.toUpperCase().trim() === action.value.toUpperCase().trim())
            if (catchPokemon !== -1) {
                nextState = {
                    ...state,
                }
                nextState.CurrentUser.pokemons.push();
            }
            return nextState || state
        case 'GET_POKEDEX':
            const exist = state.Pokedex.length;
            if (exist === 0){
                nextState = {
                    ...state,
                    Pokedex: action.value
                }
            }
            return nextState || state
        default:
            return state
    }
}


export default toggleGotcha