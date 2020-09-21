import React, {Component} from 'react';
import {Text, View} from 'react-native';
import OrderScreen from './src/components/order_screen/OrderScreen';

export default class App extends Component {
  render() {
    return (
      <View>
        <OrderScreen />
      </View>
    );
  }
}
