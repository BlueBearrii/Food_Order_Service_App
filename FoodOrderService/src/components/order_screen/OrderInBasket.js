import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import OrderInBasketQuantity from './OrderInBasketQuantity';

export default class OrderInBasket extends Component {
  render() {
    const {orderInBasket, removeItemFromBasket, onSetQuantity} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ตะกร้า</Text>
        <ScrollView>
          <View style={styles.basket}>
            {orderInBasket.map((item, index) => {
              return (
                <OrderInBasketQuantity
                  key={index}
                  item={item}
                  index={index}
                  removeItemFromBasket={removeItemFromBasket}
                  onSetQuantity={onSetQuantity}
                />
              );
            })}
          </View>
        </ScrollView>
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
