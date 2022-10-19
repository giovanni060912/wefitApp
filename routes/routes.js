import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import Home from "../src/screens/home/home";
import Favorites from "../src/screens/favorites/favorites";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShow: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#1976D2',

          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0
          }
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
            headerTrasnsparent: true,
            tabBarIcon: ({ color, size }) => {
              return (
                <AntDesign name="github" size={size} color={color} />)
            }
          }} />
        <Tab.Screen
          name='Favoritos'
          component={Favorites}
          options={{
            headerShown: false,
            headerTrasnsparent: true,
            tabBarIcon: ({ color, size }) => {
              return (
                <AntDesign name="staro" size={size} color={color} />
              )
            }
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
