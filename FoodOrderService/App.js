import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/components/main/Main';
import Basket from './src/components/basket/Basket';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={Main} />
          <Stack.Screen name="Basket" component={Basket} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
