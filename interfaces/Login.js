import React from 'react'
import {StyleSheet, View, TextInput, Image} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {connect} from 'react-redux'
import {getSingleUser} from "../API/UserApi"
import {toggleUser} from "../Store/Reducers/loginReducer";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.pseudo = ""
    }

    _searchTextInputChanged(text){
        this.pseudo = text
    }

    _login() {
        getSingleUser(this.pseudo).then((user) => {
            const action = {type: "LOGIN", value: user}
            this.props.dispatch(action)
            this.props.navigation.navigate('Reception')
        }).catch(((error) => console.error(error)));
    }


    render(){
        return (
            <View style={styles.bck}>
                <View style={styles.main_container}>
                    <Text h1 style={styles.h1Style} >LOG IN</Text>
                    <View style={styles.content_container}>
                        <View style={styles.IconText_container}>
                            <Image
                                style={styles.imgText}
                                source={require('../img/Icon/pokemon-trainer.png')}
                            />
                            <TextInput
                                style={styles.textinput}
                                placeholder='Enter your pseudo here'
                                onChangeText={(text) => this._searchTextInputChanged(text)}
                            />
                        </View>

                        <Button buttonStyle={styles.actBTN} title='Log In' onPress={() => this._login()}/>
                    </View>
                </View>
                <View style={styles.footer_container}>
                    <Button buttonStyle={styles.navBtn} title='Home' onPress={() => this.props.navigation.navigate('Home') }/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bck : {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    main_container: {
        flex: .7,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    h1Style : {
        color: '#1f89dc',
        marginTop: 60,
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        width:200,
        borderColor: '#1f89dc',
        borderBottomWidth: 2,
        borderRadius:3,
        paddingLeft: 5
    },
    content_container:{
        flex: .6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconText_container:{
        margin:5,
        flex:.5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
    },
    imgText:{
        margin: 5,
        width: 40,
        height:40,
    },
    actBTN:{
        width:200,
        marginTop:10,
    },
    navBtn: {
        borderRadius: 0,
    }
})



const mapStateToProps = (state) => {
    return {
        CurrentUser : state.CurrentUser,
    }
}



export default connect(mapStateToProps)(Login);