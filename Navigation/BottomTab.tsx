import * as React from "react"
import { Text, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../Screens/Home"
import Menu from "../Screens/Menu"

export default function BottomTab() {
    const Tab = createBottomTabNavigator()

    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Menu" component={Menu}/>
      </Tab.Navigator>
    )
  }
