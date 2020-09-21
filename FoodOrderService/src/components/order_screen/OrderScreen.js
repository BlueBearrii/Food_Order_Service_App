import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import OrderInBasket from './OrderInBasket';
import OrderLists from './OrderLists';

export default class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: ['Burger', 'Pizza'],
      orderInBasket: [],
    };
  }
  render() {
    const onSelectOrder = (item) => {
      this.setState({
        orderInBasket: [...this.state.orderInBasket, item],
      });
    };
    return (
      <View style={styles.container}>
        <OrderLists
          orderItems={this.state.orderItems}
          onSelectOrder={onSelectOrder}
        />
        <OrderInBasket orderInBasket={this.state.orderInBasket} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
