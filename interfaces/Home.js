import React from 'react'
import { View, Text, Button } from 'native-base';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Text>Home Page</Text>
                <Button onPress={() => this.props.navigation.navigate('Login') }><Text>Login</Text></Button>
                <Button onPress={() => this.props.navigation.navigate('Classement') }><Text>Classement</Text></Button>
                <Button onPress={() => this.props.navigation.navigate('Pokedex') }><Text>Pokedex</Text></Button>
            </View>
        );
    }
}

export default Home;