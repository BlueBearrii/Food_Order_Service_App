import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import OrderInBasketQuantity from './OrderInBasketQuantity';

export default class OrderInBasket extends Component {
  render() {
    const {orderInBasket} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ตะกร้า</Text>
        <View style={styles.basket}>
          {orderInBasket.map((item, index) => {
            return <OrderInBasketQuantity key={index} item={item} />;
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  basket: {
    padding: 5,
  },
  header: {
    backgroundColor: 'orange',
    padding: 15,
    textAlign: 'center',
  },
});
