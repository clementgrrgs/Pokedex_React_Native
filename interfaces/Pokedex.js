import React from 'react'
import { View, Text, Button } from 'native-base';
import {FlatList, StyleSheet} from "react-native";
import {PokemonRow} from "../components/PokemonRow"
import {getFullPokedex} from "../API/PokeApi";
import {getSinglePokemon, getFlavorPokemon} from "../API/SinglePokemonApi";


class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Pokedex: []
        }
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
                        type : typesCurrentPokemon});
                }).catch(((error) => console.error(error)));
                this.setState({Pokedex: CustomPokedex})
            });
        }).catch(((error) => console.error(error)));

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Pokedex</Text>
                <Button onPress={() => this._buildPokemon()}><Text>Show</Text></Button>
                <FlatList
                    data={this.state.Pokedex}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <PokemonRow pokemon={item}/>}
                />
                <Button onPress={() => this.props.navigation.navigate('Home') }><Text>Home</Text></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default Pokedex;