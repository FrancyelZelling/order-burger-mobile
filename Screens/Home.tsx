import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeItem from "../Components/HomeItem";

export default function Home() {
  return (
    <View style={styles.container}>
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
