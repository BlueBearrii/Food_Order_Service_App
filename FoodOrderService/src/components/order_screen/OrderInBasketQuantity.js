import React, {Component} from 'react';
import {Text, View} from 'react-native';
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
        <TouchableOpacity
          onPress={() => {
            this.setState({quantity: this.state.quantity + 1});
          }}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (this.state.quantity > 1)
              this.setState({quantity: this.state.quantity - 1});
          }}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
