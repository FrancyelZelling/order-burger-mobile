import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./tools/redux/store";
import { Provider } from "react-redux";

import StackNavigation from "./Navigation/StackNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <StatusBar style="dark" />
    </Provider>
  );
}
