
const initialState = {
    Pokedex: []
}


function toggleGotcha(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'GOTCHA_POKEMON':
            const catchPokemon = state.Pokedex.findIndex(item => item.name.toUpperCase().trim() === action.value.toUpperCase().trim())
            if (catchPokemon !== -1) {
                nextState = {
                    ...state,
                }
                nextState.Pokedex[catchPokemon].isDiscover = true;
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