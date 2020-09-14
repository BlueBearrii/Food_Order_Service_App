import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './src/components/main/Main';
import Basket from './src/components/basket/Basket';
import OrderLists from './src/components/orderLists/OrderLists';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAddressBook,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'OrderLists') {
                iconName = faAddressBook;
              } else if (route.name === 'Basket') {
                iconName = faShoppingBasket;
              }
              return (
                <FontAwesomeIcon icon={iconName} size={size} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="OrderLists"
            component={OrderLists}
            options={{tabBarLabel: 'รายการอาหาร'}}
          />
          <Tab.Screen
            name="Basket"
            component={Basket}
            options={{tabBarLabel: 'ตะกร้า'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
