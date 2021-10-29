import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Order from "../Screens/Order/Order"
import Item from "../Screens/Item/Item";
import BottomTab from "./BottomTab";

import SearchButton from "../Components/SearchButton/SearchButton";

const StackNavigation = createStackNavigator();

export default function ItemStackScreen() {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#323133",
          elevation: 0, // remove shadow on android
          shadowOpacity: 0, // remove shadow on IOS
          borderBottomWidth: 2,
          borderBottomColor: "#F0B322",
        },
        headerTitle: "Order Burger",
        headerRight: () => <SearchButton />,
        headerTitleStyle: {
          paddingLeft: 22,
          color: "white",
        },
        headerTintColor: "#F0B322", // color of back button
      }}
    >
      <StackNavigation.Screen name="Home" component={BottomTab} />
      <StackNavigation.Screen name="Item" component={Item} />
      <StackNavigation.Screen name="Order" component={Order} />
    </StackNavigation.Navigator>
  );
}
