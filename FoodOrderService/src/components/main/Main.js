import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import MenuCard from './MenuCard';
import orderLists from './orderLists';

export default class Main extends Component {
  render() {
    const lists = orderLists.map((data) => {
      console.log(data);
      return <MenuCard name={data.name} />;
    });
    return (
      <ScrollView>
        <View style={styles.container}>{lists}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
  },
});
