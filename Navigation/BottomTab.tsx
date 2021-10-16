import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../Screens/Home/Home";
import Menu from "../Screens/Menu/Menu";
import ShoppingCart from "../Screens/ShoppingCart/ShoppingCart";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        tabStyle: styles.container,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{
          tabBarIcon: (tabinfo) => (
            <Feather
              name="shopping-bag"
              size={26}
              color={tabinfo.focused ? "white" : "#353536"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (tabinfo) => (
            <Feather
              name="home"
              size={26}
              color={tabinfo.focused ? "white" : "#353536"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Menu}
        options={{
          tabBarIcon: (tabinfo) => (
            <Feather
              name="user"
              size={26}
              color={tabinfo.focused ? "white" : "#353536"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0B322",
    color: "#353536",
  },
});
