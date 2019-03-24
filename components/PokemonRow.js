import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default class PokemonRow extends React.Component {

    constructor(props) {
        super(props)
    }



    _displayUnknown () {
        const pokemon = this.props.pokemon
        if (!pokemon.isDiscover){
            return (
                <View style={styles.unknownContainer}>
                    <Text style={styles.unknownText}>#{pokemon.id}</Text>
                </View>
            )
        }
    }


    _displayKnown () {
        const pokemon = this.props.pokemon
        if (pokemon.isDiscover) {
            return (
                <View style={styles.main_container}>
                    <Image
                        style={styles.image}
                        source={{uri: pokemon.img}}
                    />
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.poke_Name}>{pokemon.name}</Text>
                            <Text style={styles.poke_type}>{pokemon.type}</Text>
                        </View>
                        <View style={styles.date_container}>
                            <Text style={styles.date_text}>#{pokemon.id}</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }





    render() {
        return(
            <View>
                {this._displayKnown()}
                {this._displayUnknown()}
            </View>
        )
    }
}



const styles = StyleSheet.create({
    unknownContainer: {
        height:150,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#636361',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    unknownText: {
        color:'#E8E6E3',
        fontSize: 44,
        fontWeight: 'bold',
    },
    main_container: {
        height: 150,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    image: {
        width: 120,
        height: 140,
        margin: 5,
        backgroundColor: 'white'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 7,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    poke_Name: {
        fontWeight: 'bold',
        fontSize: 30,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    poke_type: {
        fontSize: 16,
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
});