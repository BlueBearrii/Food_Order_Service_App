import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import lists from './menu';
import TabLeft from './TabLeft';
import TabRight from './TabRight';

export default function OrderLists() {
  const [orderState, useOrderState] = useState([]);
  let mapDataArray = lists.map((data, index) => {
    return (
      <TabLeft
        data={data}
        key={index}
        useOrderState={useOrderState}
        orderState={orderState}
      />
    );
  });
  return (
    <View style={styles.constainer}>
      <View style={styles.tabMenu}>
        <View style={styles.tabHeader}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>MENU</Text>
        </View>
        <ScrollView>{mapDataArray}</ScrollView>
      </View>
      <View style={styles.tabOrder}>
        <TabRight orderState={orderState} />
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
