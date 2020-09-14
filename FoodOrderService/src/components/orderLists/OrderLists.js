import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function OrderLists() {
  return (
    <View style={styles.constainer}>
      <View style={styles.tabMenu}>
        <Text>Tab 1</Text>
      </View>
      <View style={styles.tabOrder}>
        <Text>Tab 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tabMenu: {
    flex: 1.5,
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  tabOrder: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});
