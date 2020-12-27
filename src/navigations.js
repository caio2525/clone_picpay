import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from './screens/home';
import wallet from './screens/wallet';
import pay from './screens/pay';

const Tab = createBottomTabNavigator();

export default function Navigations() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='home'
        component={home}
      />

      <Tab.Screen
        name='wallet'
        component={wallet}
      />

      <Tab.Screen
        name='pay'
        component={pay}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
