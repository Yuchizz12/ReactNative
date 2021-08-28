import React, { useContext }from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainTabNavigator } from './MainTabNavigator'
import { HomeStackNavigator } from './HomeStackNavigation'
import { AuthScreen } from '../screens/AuthScreen'
import { UserContext } from "../contexts/userContext"

export const AppNavigator = () => {
  // const user = { id: '' };
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
      {/* <HomeStackNavigator/> */}
    </NavigationContainer>
  )
}
