import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Header from '../utils/header/Header';

import orderLists from '../utils/localDatabase/orderlist';

export default class Main extends Component {
  onClickFunction = (title) => {
    Alert.alert(`เพิ่ม ${title}`);
  };

  onClickBasket = () => {
    Alert.alert('Basket');
  };
  render() {
    let lists = orderLists.map((data, index) => {
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text>ลด</Text>
              </TouchableOpacity>
              <Text style={styles.countText}>0</Text>
              <TouchableOpacity style={styles.button}>
                <Text>เพิ่ม</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    });
    return (
      <View>
        <Header title={'MENU'} />
        <ScrollView style={{marginBottom: 'auto'}}>{lists}</ScrollView>
        <View>
          <Button title="ไปที่ตะกร้า" onPress={() => this.onClickBasket()} />
        </View>
      </View>
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
    height: 250,
    width: '100%',
    padding: 5,
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  textName: {
    padding: 10,
    fontSize: 24,
  },
  textPrice: {
    padding: 10,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    fontSize: 36,
    marginHorizontal: 10,
  },
});
