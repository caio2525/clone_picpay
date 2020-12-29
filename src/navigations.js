import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from './screens/home';
import wallet from './screens/wallet';
import pay from './screens/pay';
import { FontAwesome, Entypo, AntDesign, Ionicons, Feather } from '@expo/vector-icons';

const icons = {
  home:{
    lib: Entypo,
    name: 'home'
  },

  wallet:{
    lib: AntDesign,
    name: 'creditcard'
  },

  pay:{
    lib: FontAwesome,
    name: 'dollar'
  },

  notifications:{
    lib: Ionicons,
    name: 'notifications'
  },

  settings:{
    lib: Feather,
    name: 'settings'
  }
}

const Tab = createBottomTabNavigator();

export default function Navigations() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {lib: Icon, name} = icons[route.name];
          return (<Icon name={name} size={size} color={color}/>)
        }
      })}
    >
      <Tab.Screen
        name='home'
        component={home}
        options={
          {
            title: 'home'
          }
        }
      />

      <Tab.Screen
        name='wallet'
        component={wallet}
        options={{
          title: 'wallet'
        }}
      />

      <Tab.Screen
        name='pay'
        component={pay}
        options={{
          title: 'pay'
        }}
      />

      <Tab.Screen
        name='notifications'
        component={home}
        options={
          {
            title: 'notifications'
          }
        }
      />

      <Tab.Screen
        name='settings'
        component={home}
        options={
          {
            title: 'settings'
          }
        }
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
