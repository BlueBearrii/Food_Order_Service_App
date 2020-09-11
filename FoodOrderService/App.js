import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Main from './src/components/main/Main';
import Menu from './src/components/main/Menu';

export default class App extends Component {
  render() {
    return (
      <View>
        <Menu />
      </View>
    );
  }
}
