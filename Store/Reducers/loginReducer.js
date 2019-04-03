const initialUserState = {
    CurrentUser : {
        _id: "",
        pseudo: "",
        nbPokemon:0,
        friends: [],
        pokemons: []
    }
}


function toggleUser(state = initialUserState, action){
    let nextState
    switch (action.type) {
        case 'LOGIN':
            nextState = {
                ...state,
            }
            nextState.CurrentUser = {
                _id: action.value[0]._id,
                pseudo : action.value[0].pseudo,
                nbPokemon : action.value[0].nbPokemon,
                friends : action.value[0].friends,
                pokemons : action.value[0].pokemons
            }
            return nextState || state
        case 'SIGIN':
            nextState = {
                ...state,
            }
            nextState.CurrentUser = {
                _id: action.value._id,
                pseudo : action.value.pseudo,
                nbPokemon : action.value.nbPokemon,
                friends : action.value.friends,
                pokemons : action.value.pokemons
            }
            return nextState || state
        case 'LOGOUT':
            nextState = {
                ...state,
            }
            nextState.CurrentUser = {
                _id: "",
                pseudo: "",
                nbPokemon:0,
                friends: [],
                pokemons: []
            }
            return nextState || state
        case 'ADDPOKE':
            nextState = {
                ...state,
            }
            var nombrePoke = state.CurrentUser.nbPokemon + 1;
            nextState.CurrentUser = {
                _id: state.CurrentUser._id,
                pseudo: state.CurrentUser.pseudo,
                nbPokemon: nombrePoke,
                friends: state.CurrentUser.friends,
                pokemons: state.CurrentUser.pokemons.push(action.value)
            }
            return nextState || state
        default:
            return state
    }
}


export default toggleUser