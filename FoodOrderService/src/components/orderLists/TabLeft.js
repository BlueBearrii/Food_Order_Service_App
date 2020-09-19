import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function TabLeft(props) {
  const {type, meat} = props.data;
  let mapProps = meat.map((meatType, index) => {
    return (
      <View key={index} style={styles.cardDetail}>
        <View style={{padding: 2}}>
          <Text>{meatType}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Picture</Text>
        </View>
        <View style={styles.touchSelectStyle}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(type + ' ' + meatType);
            }}>
            <Text>เพิ่ม</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text>{type}</Text>
      </View>
      <ScrollView horizontal={true}>{mapProps}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#ededed',
    flex: 1,
    height: 200,
  },
  cardHeader: {
    backgroundColor: 'orange',
    padding: 10,
  },
  cardDetail: {
    marginVertical: 5,
    marginHorizontal: 2.5,
    backgroundColor: '#fff',
    height: 'auto',
    width: 200,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  touchSelectStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    right: 10,
    left: 10,
    bottom: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
