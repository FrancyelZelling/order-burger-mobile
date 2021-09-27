import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

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
        },
        headerTitle: "Order Burger",
        headerRight: () => <SearchButton />,
        headerTitleStyle: {
          paddingLeft: 22,
          color: "white",
        },
      }}
    >
      <StackNavigation.Screen name="Home" component={BottomTab} />
      <StackNavigation.Screen name="Item" component={Item} />
    </StackNavigation.Navigator>
  );
}
