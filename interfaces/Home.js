import React from 'react'
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';
import { connect } from 'react-redux';
import {getFullPokedex, getSinglePokemon} from "../API/PokeApi";
import {updateUser} from "../API/UserApi";
import toggleGotcha from "../Store/Reducers/gotchaReducer";
import toggleUser from "../Store/Reducers/loginReducer";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.name_search = ""
    }


    componentDidUpdate() {
        console.log('ComponentDidUpdate')
        console.log(this.props.CurrentUser)
    }


    _searchTextInputChanged(text){
        this.name_search = text

    }

    /*_togglePokedex(Pokedex){
        const action = {type: "GET_POKEDEX", value: Pokedex}
        this.props.dispatch(action)
    }*/

    /*_buildPokemon(){
        getFullPokedex().then(data => {
            let pokedex = data.pokemon_entries;
            let CustomPokedex = []
            pokedex.forEach((pokemon,index) => {
                getSinglePokemon(pokemon.entry_number).then(singlePokemon => {
                    var typesCurrentPokemon = "";
                    singlePokemon.types.forEach((tip) => {
                        typesCurrentPokemon += tip.type.name.toUpperCase()+"  "
                    });
                    CustomPokedex.splice(index,0,{
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
    }*/



    _toggleCatch () {
        let CustomPokedex;
        getSinglePokemon(this.name_search).then(singlePokemon => {
            var typesCurrentPokemon = "";
            singlePokemon.types.forEach((tip) => {
                typesCurrentPokemon += tip.type.name.toUpperCase()+"  "
            });
            CustomPokedex = {
                id : singlePokemon.id,
                img : singlePokemon.sprites.front_default,
                name : singlePokemon.name.toUpperCase(),
                type : typesCurrentPokemon
            }
            const action = {type: "ADDPOKE", value: CustomPokedex}
            this.props.dispatch(action)
            updateUser(this.props.CurrentUser).then(() => {
                console.log('User Updated')
            }).catch(((error) => console.error(error)));
        }).catch(((error) => console.error(error)));
    }

    _logout(){
        const action = {type: "LOGOUT", value: ""}
        this.props.dispatch(action)
    }


    _display(){
        if (this.props.CurrentUser.pseudo === "") {
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

                        <Button style={styles.navBtn} title="Sigin" onPress={() => this.props.navigation.navigate('Sigin') }/>
                        <Button style={styles.navBtn} title="Login" onPress={() => this.props.navigation.navigate('Login') }/>
                        <Button style={styles.navBtn} title="Pokedex" onPress={() => {
                            this.props.navigation.navigate('Pokedex', { pokedex : this.props.CurrentUser.pokemons})} }/>
                    </View>
                </View>
            );
        } else {
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
                        <Text>{this.props.CurrentUser.pseudo}</Text>
                        <Button style={styles.navBtn} title="Logout" onPress={() => this._logout()}/>
                        <Button style={styles.navBtn} title="Pokedex" onPress={() => {
                            this.props.navigation.navigate('Pokedex', { pokedex : this.props.CurrentUser.pokemons})} }/>
                    </View>
                </View>
            );
        }
    }


    render() {
        return (
            <View style={styles.main_container}>
                {this._display()}
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
        CurrentUser: state.CurrentUser
    }
}




export default connect(mapStateToProps)(Home);