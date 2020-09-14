import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

import MenuCard from './MenuCard';
import orderLists from './orderLists';

export default class Main extends Component {
  render() {
    const lists = orderLists.map((data, index) => {
      //console.log(data);
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
            <FontAwesomeIcon
              icon={faShoppingBasket}
              color={'#3d3d3d'}
              size={30}
            />
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
