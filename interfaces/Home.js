import React from 'react'
import { StyleSheet, View,ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-elements';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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
    }
}


const styles = StyleSheet.create({
    bckImg : {
        width: '100%',
        height: '100%',
        flex: 1
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
    navBtn: {
        margin:5,
        width: 150,
    },
    content_container:{
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
})



export default Home;