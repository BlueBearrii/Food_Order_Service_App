import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import Header from '../utils/header/Header';

import orderLists from '../utils/localDatabase/orderlist';

export default class Main extends Component {
  onClickFunction = (title) => {
    Alert.alert(`เพิ่ม ${title}`);
  };
  render() {
    let lists = orderLists.map((data, index) => {
      console.log(data);
      return (
        <View style={styles.container} key={`${index} ${data.name}`}>
          <View style={styles.cardCoontainer}>
            <View style={styles.imageCard}>
              <ImageBackground
                source={data.picture}
                style={styles.imageContainer}
              />
            </View>
            <Text style={styles.textName}>ชื่อ : {data.name} </Text>
            <Text style={styles.textPrice}>ราคา : {data.price} บาท</Text>
            <Button
              style={styles.buttonStyle}
              title="เลือก"
              onPress={() => {
                this.onClickFunction(data.name);
              }}
            />
          </View>
        </View>
      );
    });
    return (
      <ScrollView>
        <View>
          <Header title={'MENU'} />
          {lists}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardCoontainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  imageCard: {
    height: 200,
    width: '100%',
    padding: 5,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
  },
  textName: {
    padding: 10,
    fontSize: 24,
  },
  textPrice: {
    padding: 10,
    fontSize: 18,
  },
  buttonStyle: {},
});
