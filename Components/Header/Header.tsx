import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./Style";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.brandName}>Order Burger</Text>
      <Feather name="search" size={24} color="#F0B322" />
    </View>
  );
}
