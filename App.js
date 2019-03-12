import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { Root } from 'native-base';
import { createAppContainer } from 'react-navigation';
import AppStackNavigator from './navigation/AppStackNavigator';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
        }
        this.loadFonts();
    }

    async loadFonts() {
        try {
            await Expo.Font.loadAsync({
                'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
            });

            this.setState({ fontsLoaded: true });
        }
        catch (err) {
            console.log(err);
        }
    }

  render() {
    const AppContainer = createAppContainer(AppStackNavigator);
    const fontsLoaded = this.state.fontsLoaded;

      if (fontsLoaded)
          return (
                  <Root>
                      <AppContainer/>
                  </Root>
          );
      else
          return <View><Text>Loading....</Text></View>
    }
}

