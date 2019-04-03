import React from 'react'
import {View, Text} from "native-base"
import {Button, FlatList, StyleSheet ,ActivityIndicator} from "react-native";
import PokemonRow from "../components/PokemonRow"
import { connect } from 'react-redux'


class Pokedex extends React.Component {
    constructor(props) {
        super(props)
    }

    _displayLoading() {
        console.log("Pokedex : "+this.props.navigation.getParam('pokedex',[]))
        if (this.props.navigation.getParam('pokedex',[]).length === 0) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            );
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Pokedex</Text>
                <FlatList
                    data={this.props.navigation.getParam('pokedex',[])}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <PokemonRow pokemon={item}/>}
                />
                {this._displayLoading()}
                <Button title='Home' onPress={() => this.props.navigation.navigate('Home') }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


const mapStateToProps = (state) => {
    return {
        CurrentUser : state.CurrentUser
    }
}

export default connect(mapStateToProps)(Pokedex)