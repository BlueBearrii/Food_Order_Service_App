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
      let clonArray = [...this.state.orderInBasket];
      let isExist = false;
      for (let x = 0; x < clonArray.length; x++) {
        if (item === clonArray[x].name) {
          isExist = true;
          clonArray[x].quantity = clonArray[x].quantity + 1;
          this.setState({
            orderInBasket: clonArray,
          });
          break;
        }
      }

      if (!isExist) {
        this.setState({
          orderInBasket: [
            ...this.state.orderInBasket,
            {name: item, quantity: 1},
          ],
        });
      }

      console.log(this.state.orderInBasket);
    };

    const removeItemFromBasket = (index) => {
      let clonArray = [...this.state.orderInBasket];
      clonArray.splice(index, 1);
      this.setState({
        orderInBasket: clonArray,
      });
    };

    const onSetQuantity = (type, item) => {
      let clonArray = [...this.state.orderInBasket];
      if (type === 'ADD') {
        for (let x = 0; x < clonArray.length; x++) {
          if (item === clonArray[x].name) {
            clonArray[x].quantity = clonArray[x].quantity + 1;
            this.setState({
              orderInBasket: clonArray,
            });
            break;
          }
        }
      }

      if (type === 'REMOVE') {
        console.log('Before loop');
        for (let x = 0; x < clonArray.length; x++) {
          if (item === clonArray[x].name) {
            if (clonArray[x].quantity === 1) {
              removeItemFromBasket(x);
              console.log('Updated');
            } else {
              clonArray[x].quantity = clonArray[x].quantity - 1;
              this.setState({
                orderInBasket: clonArray,
              });
              break;
            }
          }
        }
      }
    };
    return (
      <View style={styles.container}>
        <OrderLists
          orderItems={this.state.orderItems}
          onSelectOrder={onSelectOrder}
        />
        <OrderInBasket
          orderInBasket={this.state.orderInBasket}
          removeItemFromBasket={removeItemFromBasket}
          onSetQuantity={onSetQuantity}
        />
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
