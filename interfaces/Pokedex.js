import React from 'react'
import {View} from "native-base"
import {Button, FlatList, StyleSheet} from "react-native";
import {Text} from 'react-native-elements';
import PokemonRow from "../components/PokemonRow"
import { connect } from 'react-redux'


class Pokedex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text h2 style={styles.h2Style}>POKÉDEX</Text>
                </View>
                <FlatList
                    style={styles.listStyle}
                    data={this.props.navigation.getParam('pokedex',[])}
                    keyExtractor={(item) => this.props.navigation.getParam('pokedex',[]).indexOf(item).toString()}
                    renderItem={({item}) => <PokemonRow pokemon={item}/>}
                />
                <Button title='Home' style={styles.btn} onPress={() => this.props.navigation.navigate('Reception') }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    title_container:{
        margin:10,
        height: 105,
        flex:.1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    listStyle:{
        flex:1,
    },
    btn:{
      flex:.1,
    },
    h2Style:{
        color: '#125181'
    }
})


const mapStateToProps = (state) => {
    return {
        CurrentUser : state.CurrentUser
    }
}

export default connect(mapStateToProps)(Pokedex)