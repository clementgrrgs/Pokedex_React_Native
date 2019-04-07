import React from 'react'
import {StyleSheet, View, TextInput, Image, TouchableOpacity,Alert} from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import {getSinglePokemon} from "../API/PokeApi";
import {updateUser} from "../API/UserApi";



class Reception extends React.Component {
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
            if (singlePokemon !== undefined){
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
                    this.props.navigation.navigate('Pokedex', { pokedex : this.props.CurrentUser.pokemons})
                }).catch(((error) => console.error(error)));
            }else{
                Alert.alert(
                    'Pokemon not Found',
                    'Too bad '+ this.name_search +' it\'s not yet a Pokemon !!!',
                    [
                        {text: 'Try Again', onPress: () => console.log('Try Pressed')},
                    ],
                    {cancelable: false},
                );
            }

        }).catch(((error) => console.error(error)));
    }

    _logout(){
        const action = {type: "LOGOUT", value: ""}
        this.props.dispatch(action);
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.main_container}>


                <View style={styles.header_container}>
                    <View style={styles.profile_container}>
                        <View style={styles.IconText_container}>
                            <Image
                                style={styles.imgText}
                                source={require('../img/Icon/pokemon-trainer.png')}
                            />
                            <Text h4 style={styles.h4Style}>{this.props.CurrentUser.pseudo}</Text>
                        </View>
                        <View style={styles.IconText_container}>
                            <Image
                                style={styles.imgText}
                                source={require('../img/Icon/snorlax.png')}
                            />
                            <Text h4 style={styles.h4Style}>{this.props.CurrentUser.nbPokemon}</Text>
                        </View>
                    </View>

                    <TouchableOpacity  style={styles.logoutBtn} activeOpacity={0.5} onPress={() => this._logout()}>
                        <Image
                            style={styles.imgBtn}
                            source={require('../img/Icon/logout.png')}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.content_container}>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Pokemon Name'
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                    />
                    <TouchableOpacity  activeOpacity={0.5} onPress={() => this._toggleCatch()}>
                        <Image
                            style={styles.catchBtn}
                            source={require('../img/Icon/pokeball.png')}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.footer_container}>
                    <TouchableOpacity  style={styles.navBtn} activeOpacity={0.5}>
                        <Image
                            style={styles.imgBtn}
                            source={require('../img/Icon/bar-chart.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity  style={styles.navBtn} activeOpacity={0.5} onPress={() => {
                        this.props.navigation.navigate('Pokedex', { pokedex : this.props.CurrentUser.pokemons})}}>
                        <Image
                            style={styles.imgBtn}
                            source={require('../img/Icon/pokedex.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main_container : {
        flex:1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header_container: {
        width: "100%",
        marginTop: 25,
        flex:.15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    content_container:{
        width: "100%",
        flex:.7,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    footer_container: {
        width:"100%",
        flex:.1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    profile_container: {
        width:"100%",
        flex:.5,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
    IconText_container:{
        margin:5,
        flex:1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    imgText:{
        margin: 5,
        width: 25,
        height:25,
    },
    logoutBtn :{
        margin: 10,
        marginTop:15,
    },
    catchBtn:{
        width: 80,
        height: 80,
    },
    textinput:{
        margin: 50,
        height: 50,
        width:200,
        borderColor: '#1f89dc',
        borderBottomWidth: 2,
        borderRadius:3,
        paddingLeft: 5
    },
    h4Style:{
        padding:5,
        color:"#666",
    },
    imgBtn:{
        width: 30,
        height: 30,
    },
    SeparatorLine: {
        backgroundColor: '#ccc',
        width: 2,
        height: 40,
    },
})


const mapStateToProps = (state) => {
    return {
        CurrentUser: state.CurrentUser
    }
}

export default connect(mapStateToProps)(Reception);
