import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


export class PokemonRow extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        const pokemon = this.props.pokemon

        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: pokemon.img}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.poke_Name}>{pokemon.name}</Text>
                    </View>
                    <View style={styles.description_container}>
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

const styles = StyleSheet.create({
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
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    poke_Name: {
        fontWeight: 'bold',
        fontSize: 30,
        flex: 7,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    poke_type: {
        fontSize: 16,
        color: '#666666'
    },
    description_container: {
        flex: 2
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})
