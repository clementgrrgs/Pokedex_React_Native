import React from 'react'
import { View, Text, Button } from 'native-base';

class Classement extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Text>Classement View</Text>
                <Button onPress={() => this.props.navigation.navigate('Home') }><Text>Home</Text></Button>
            </View>
        );
    }
}

export default Classement;