import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class OrderInBasketQuantity extends Component {
  render() {
    const {item, removeItemFromBasket, index, onSetQuantity} = this.props;
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>จำนวน {item.quantity} จาน</Text>
        <View style={styles.row}>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnStyles}
              onPress={() => {
                onSetQuantity('ADD', item.name);
              }}>
              <Text style={styles.textStyle}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnStyles}
              onPress={() => {
                onSetQuantity('REMOVE', item.name);
              }}>
              <Text style={styles.textStyle}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
  },
  btnStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  textStyle: {
    fontSize: 20,
  },
});
