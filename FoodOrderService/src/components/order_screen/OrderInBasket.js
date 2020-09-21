import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import OrderInBasketQuantity from './OrderInBasketQuantity';

export default class OrderInBasket extends Component {
  render() {
    const {orderInBasket} = this.props;
    return (
      <View style={styles.container}>
        <Text>Oder in basket</Text>
        {orderInBasket.map((item, index) => {
          return <OrderInBasketQuantity key={index} item={item} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderLeftWidth: 0.5,
  },
});
