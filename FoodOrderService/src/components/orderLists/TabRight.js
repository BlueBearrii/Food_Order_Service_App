import React from 'react';
import {View, Text} from 'react-native';

export default function TabRight(props) {
  const mapProps = props.orderState.map((data) => {
    return <Text>{data}</Text>;
  });
  return (
    <View>
      <Text>{mapProps}</Text>
    </View>
  );
}
