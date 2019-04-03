import React from 'react'
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';
import {connect} from 'react-redux'
import {createUser} from "../API/UserApi"
import {toggleUser} from "../Store/Reducers/loginReducer";

class Sigin extends React.Component {
    constructor(props) {
        super(props);
        this.pseudo = ""
    }

    _searchTextInputChanged(text){
        this.pseudo = text
    }

    _sigin(){
        var NewUser = {
            _id: "",
            pseudo: this.pseudo.trim(),
            nbPokemon:0,
            friends: [],
            pokemons: []
        };
        createUser(NewUser).then((user) => {
            const action = {type: "SIGIN", value: user}
            this.props.dispatch(action)
            this.props.navigation.navigate('Home')
        }).catch(((error) => console.error(error)));
    }


    render(){
        return (
            <View style={styles.main_container}>
                <Text>SIGIN</Text>
                <View style={styles.content_container}>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter your pseudo here'
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                    />
                    <Button title='Sig In' onPress={() => this._sigin()}/>
                </View>
                <View style={styles.footer_container}>
                    <Button style={styles.navBtn} title='Home' onPress={() => this.props.navigation.navigate('Home') }/>
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
        CurrentUser : state.CurrentUser,
    }
}



export default connect(mapStateToProps)(Sigin);