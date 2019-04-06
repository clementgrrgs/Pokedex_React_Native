import React from 'react'
import { StyleSheet, View,TextInput,ImageBackground } from 'react-native';
import { Button, Text,Image } from 'react-native-elements';
import { connect } from 'react-redux';
import {getSinglePokemon} from "../API/PokeApi";
import {updateUser} from "../API/UserApi";
import { Icon } from 'react-native-elements';


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
                <ImageBackground source={require('../img/Home-NotLog.jpg')} style={styles.bckImg}>
                    <View style={styles.main_container}>
                            <Text h1 style={styles.h1Style} >POKÉDEX</Text>
                            <View style={styles.content_container}>
                                <Button buttonStyle={styles.navBtn} title="Login" onPress={() => this.props.navigation.navigate('Login')}/>
                                <Button buttonStyle={styles.navBtn} title="Sigin" type="clear" onPress={() => this.props.navigation.navigate('Sigin')}/>
                            </View>
                    </View>
                </ImageBackground>
            );
        } else {
            return (
                <ImageBackground source={require('../img/Home-Log.jpg')} style={styles.bckImg}>
                    <View style={styles.main_container}>
                        <View style={styles.header_container}>
                            <View style={styles.profile_container}>
                                <Text h4 style={styles.h4Style}>{this.props.CurrentUser.pseudo}</Text>
                                <Button style={styles.navBtn} title="Logout" onPress={() => this._logout()}/>
                            </View>
                            <Text h4 style={styles.h4Style}> Pokemon : {this.props.CurrentUser.nbPokemon}</Text>
                         </View>
                        <View style={styles.catch_container}>
                            <TextInput
                                style={styles.textinput}
                                placeholder='Pokemon Name'
                                onChangeText={(text) => this._searchTextInputChanged(text)}
                            />
                            <Button buttonStyle={styles.navBtn} title='CATCH' onPress={() => this._toggleCatch()}/>
                        </View>
                        <View style={styles.footer_container}>
                            <Button buttonStyle={styles.navBtn} title="Profile" disabled/>
                            <Button buttonStyle={styles.navBtn} title="Pokedex" onPress={() => {
                                this.props.navigation.navigate('Pokedex', { pokedex : this.props.CurrentUser.pokemons})} }/>
                        </View>
                    </View>
                </ImageBackground>
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
    bckImg : {
        width: '100%',
        height: '100%',
        flex: 1
    },
    Text :{
        color: '#fff',
    },
    main_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    h1Style : {
        color: '#fff',
        marginTop: 75,
    },
    header_container: {
        width: "100%",
        flex:.3,
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"flex-end",
    },
    navBtn: {
        margin:5,
        width: 150,
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        width: 200,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 5,
        color: '#fff',
        backgroundColor:'#fff'
    },
    content_container:{
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    catch_container : {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    footer_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile_container : {
        margin:0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    h4Style:{
        color: '#fff'
    }
})


const mapStateToProps = (state) => {
    return {
        CurrentUser: state.CurrentUser
    }
}




export default connect(mapStateToProps)(Home);