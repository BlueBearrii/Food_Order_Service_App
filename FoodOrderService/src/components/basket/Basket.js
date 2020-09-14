import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Basket() {
  return (
    <View>
      <Text>Basket</Text>
      <Button title="Console" onPress={() => console.log('Hello')} />
    </View>
  );
}
