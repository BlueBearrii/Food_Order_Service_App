import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f49f1f',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    marginTop: 40,
  },
});
