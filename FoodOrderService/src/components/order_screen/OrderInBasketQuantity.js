import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class OrderInBasketQuantity extends Component {
  constructor(props) {
    super();
    this.state = {
      quantity: 1,
    };
  }
  render() {
    const {item} = this.props;
    return (
      <View>
        <Text>{item}</Text>
        <Text>จำนวน {this.state.quantity} จาน</Text>
        <View style={styles.row}>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnStyles}
              onPress={() => {
                this.setState({quantity: this.state.quantity + 1});
              }}>
              <Text style={styles.textStyle}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnStyles}
              onPress={() => {
                if (this.state.quantity > 1)
                  this.setState({quantity: this.state.quantity - 1});
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
