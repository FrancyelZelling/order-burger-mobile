import React from "react";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./Styles";

export default function SearchButton() {
  return (
    <Pressable style={styles.container}>
      <Feather name="search" size={24} color="white" />
    </Pressable>
  );
}
