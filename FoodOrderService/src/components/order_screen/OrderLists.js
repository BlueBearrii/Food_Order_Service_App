import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import lists from './MenuLists';

export default class OrderLists extends Component {
  render() {
    const {onSelectOrder} = this.props;

    const generateLists = lists.map((item, index) => {
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
                  <View style={styles.selectButtonContainer}>
                    <View style={styles.selectButtonCover}>
                      <TouchableOpacity
                        style={styles.selectButton}
                        onPress={() => {
                          onSelectOrder(`${itemType}${item} ธรรมดา`);
                        }}>
                        <Text>ธรรมดา</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.selectButtonCover}>
                      <TouchableOpacity
                        style={styles.selectButton}
                        onPress={() => {
                          onSelectOrder(`${itemType}${item} พิเศษ`);
                        }}>
                        <Text>พิเศษ</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <Text style={styles.header}>รายการอาหาร</Text>
        <ScrollView>
          <View style={{paddingBottom: 150}}>{generateLists}</View>
        </ScrollView>
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
    paddingHorizontal: 1,
  },
  header: {
    backgroundColor: 'orange',
    padding: 15,
    textAlign: 'center',
  },
  typeHeader: {
    marginTop: 5,
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
    flex: 2,
    padding: 5,
  },
  selectButtonContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  selectButtonCover: {
    flex: 1,
    margin: 1,
  },
  selectButton: {
    backgroundColor: 'orange',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
