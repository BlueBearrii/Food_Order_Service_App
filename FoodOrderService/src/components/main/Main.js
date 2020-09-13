import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MenuCard from './MenuCard';
import orderLists from './orderLists';

export default class Main extends Component {
  render() {
    const lists = orderLists.map((data, index) => {
      console.log(data);
      return (
        <MenuCard name={data.name} price={data.price} key={`key is ${index}`} />
      );
    });
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>{lists}</View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Basket')}>
            <Text>Go to basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 15,
    backgroundColor: '#ffb01b',
    height: 60,
    width: 60,
    borderWidth: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
