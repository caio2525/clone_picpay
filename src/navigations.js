import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from './screens/home';
import wallet from './screens/wallet';
import pay from './screens/pay';
import { FontAwesome, Entypo, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import PayButton from './components/payButton';

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
    name: 'notifications-outline'
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
      initialRouteName="wallet"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          const {lib: Icon, name} = icons[route.name];
          if(route.name === 'pay')
            return(
              <PayButton
                onPress={() => navigation.navigate('pay')}
                focused={focused}
              />
          )

          return (<Icon name={name} size={size} color={color}/>)
        }
      })}
      tabBarOptions={{
        activeTintColor: '#161a17',

      }}
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
          title: ''
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
