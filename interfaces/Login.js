import React from 'react'
import { View, Text, Button } from 'native-base';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Text>Login</Text>
                <Button onPress={() => this.props.navigation.navigate('Home') }>
                    <Text>Home</Text>
                </Button>
            </View>
        );
    }
}

export default Login;