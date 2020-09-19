import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import lists from './menu';
import TabLeft from './TabLeft';
import TabRight from './TabRight';

export default function OrderLists() {
  let mapDataArray = lists.map((data, index) => {
    return <TabLeft data={data} key={index} />;
  });
  return (
    <View style={styles.constainer}>
      <View style={styles.tabMenu}>
        <View style={styles.tabHeader}>
          <Text>MENU</Text>
        </View>
        <ScrollView>{mapDataArray}</ScrollView>
      </View>
      <View style={styles.tabOrder}>
        <TabRight />
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
    flex: 1.8,
    //backgroundColor: 'red',
  },
  tabHeader: {
    backgroundColor: 'orange',
    height: 'auto',
    padding: 15,
  },
  tabOrder: {
    flex: 1,
    backgroundColor: '#ededed',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});
