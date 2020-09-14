import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import image from '../../assets/vector/burger.png';
import Basket from '../basket/Basket';

export default function MenuCard(props) {
  const [state, setState] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.cardSyle}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={image}
            style={{width: '100%', height: '100%'}}></ImageBackground>
        </View>
        <View style={styles.name}>
          <Text style={styles.title}>ชื่อ : {props.name}</Text>
          <Text style={styles.price}>ราคา : {props.price} บาท</Text>
        </View>
        <View style={styles.buttonLine}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.textInButton}
              onPress={() => {
                if (state > 0) setState(state - 1);
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={styles.textQuantity}>{state}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setState(state + 1);
            }}>
            <Text style={styles.textInButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cardSyle: {
    backgroundColor: '#fff',
    height: 300,
    width: '100%',
    borderRadius: 10,
    borderWidth: 0,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  imageContainer: {
    flex: 5,
    padding: 5,
  },
  name: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
  },
  price: {
    fontSize: 20,
  },
  textQuantity: {
    fontSize: 36,
  },
  buttonLine: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInButton: {
    fontSize: 30,
  },
});
