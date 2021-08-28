import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStackNavigator } from './HomeStackNavigation'
import { UserScreen } from '../screens/UserScreen'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export const MainTabNavigator = () => {
  return (
      <Tab.Navigator
      initialRouteName="Feed"
          screenOptions={{
              tabBarActiveTintColor: '#900',
              tabBarInactiveTintColor: '#999'
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={UserScreen}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
