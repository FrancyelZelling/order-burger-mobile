import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Item from "../Screens/Item/Item";
import BottomTab from "./BottomTab";

const StackNavigation = createStackNavigator();

export default function ItemStackScreen() {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen name="Home" component={BottomTab} />
      <StackNavigation.Screen name="Item" component={Item} />
    </StackNavigation.Navigator>
  );
}
