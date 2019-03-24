import React from 'react'
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';
import { connect } from 'react-redux'
import {getFullPokedex} from "../API/PokeApi";
import {getSinglePokemon} from "../API/SinglePokemonApi";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.name_search = ""
        this.Pokedex = []
    }


    _searchTextInputChanged(text){
        this.name_search = text

    }

    _togglePokedex(Pokedex){
        const action = {type: "GET_POKEDEX", value: Pokedex}
        this.props.dispatch(action)
    }

    _buildPokemon(){
        getFullPokedex().then(data => {
            let pokedex = data.pokemon_entries;
            let CustomPokedex = []
            pokedex.forEach((pokemon) => {
                getSinglePokemon(pokemon.entry_number).then(singlePokemon => {
                    var typesCurrentPokemon = "";
                    singlePokemon.types.forEach((tip) => {
                        typesCurrentPokemon += tip.type.name.toUpperCase()+"  "
                    });


                    CustomPokedex.push({
                        id : pokemon.entry_number,
                        img : singlePokemon.sprites.front_default,
                        name : pokemon.pokemon_species.name.toUpperCase(),
                        type : typesCurrentPokemon,
                        isDiscover: false,
                    });
                }).catch(((error) => console.error(error)));
                this._togglePokedex(CustomPokedex)
            });
        }).catch(((error) => console.error(error)));
    }



    _toggleCatch () {
        const action = {type: "GOTCHA_POKEMON", value: this.name_search}
        this.props.dispatch(action)
    }



    _NavPokedex() {
        this._buildPokemon()
        this.props.navigation.navigate('Pokedex')
    }



    render() {
        return (
            <View style={styles.main_container}>
                <Text>Home Page</Text>
                <View style={styles.content_container}>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Pokemon Name'
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                    />
                    <Button title='GOTCHA' onPress={() => this._toggleCatch()}/>
                </View>
                <View style={styles.footer_container}>
                    <Button style={styles.navBtn} title="Profile" onPress={() => this.props.navigation.navigate('Classement') }/>
                    <Button style={styles.navBtn} title="Pokedex" onPress={() => this._NavPokedex() }/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    content_container:{

    },
    footer_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    navBtn: {
        margin:'2px',
    }
})


const mapStateToProps = (state) => {
    return {
        gotchaPokemon: state.gotchaPokemon,
        Pokedex : state.Pokedex
    }
}

export default connect(mapStateToProps)(Home);