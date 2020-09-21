import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import lists from './MenuLists';

export default class OrderLists extends Component {
  render() {
    const {onSelectOrder} = this.props;

    const generateLists = lists.map((item, index) => {
      console.log(item);
      let itemType = item.type;
      return (
        <View key={`${index} ${item.type}`} style={styles.card}>
          <Text style={styles.typeHeader}>{item.type}</Text>
          <ScrollView horizontal={true}>
            {item.meat.map((item, index) => {
              return (
                <View key={`${index}`} style={styles.meatCard}>
                  <View style={styles.meatCardItem}>
                    <Text>{item}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.selectButton}
                    onPress={() => {
                      onSelectOrder(`${itemType}${item} ธรรมดา`);
                    }}>
                    <Text>ธรรมดา</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.selectButton}
                    onPress={() => {
                      onSelectOrder(`${itemType}${item} พิเศษ`);
                    }}>
                    <Text>พิเศษ</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <ScrollView>{generateLists}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  card: {
    height: 200,
  },
  typeHeader: {
    backgroundColor: 'orange',
    padding: 15,
  },
  meatCard: {
    height: '100%',
    width: 200,
    padding: 5,
  },
  meatCardItem: {
    backgroundColor: '#ededed',
    height: '50%',
    width: '100%',
    padding: 5,
  },
  selectButton: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
