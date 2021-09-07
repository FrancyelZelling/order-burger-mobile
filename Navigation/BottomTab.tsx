import * as React from "react"
import {  StyleSheet} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons'

import Home from "../Screens/Home"
import Menu from "../Screens/Menu"

export default function BottomTab() {
    const Tab = createBottomTabNavigator()

    return (
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        tabStyle: styles.container,
        showLabel: false
      }}>
        <Tab.Screen name="Menu" component={Menu} options={{
          tabBarIcon:(tabinfo) => (
            <Feather name="menu" size={26} color={tabinfo.focused ? "white" : "#353536"} />
          )
        }} />
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:(tabinfo) => (
            <Feather name="home" size={26} color={tabinfo.focused ? "white" : "#353536"} />
          )
        }} />
        <Tab.Screen name="Profile" component={Menu} options={{
          tabBarIcon:(tabinfo) => (
            <Feather name="user" size={26} color={tabinfo.focused ? "white" : "#353536"} />
          )
        }} />
      </Tab.Navigator>
    )
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0B322',
    color: '#353536'
  }
})
