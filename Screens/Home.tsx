import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Button, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootState } from "../tools/redux/store";
import { useSelector } from "react-redux";

import Screen from "./Special/Screen";
import HomeItem from "../Components/HomeItem";

export default function Home() {
  const products = useSelector((state: RootState) => state.app.products);

  return (
    <SafeAreaView >
      <ScrollView style={{
        backgroundColor: "#353536",
      }}
      contentContainerStyle={{
        alignItems: "center"
      }}
      >
        <Screen />
        <FlatList
          data={products}
          keyExtractor={(item) => item.name}
          numColumns={2}
          renderItem={({ item }) => {
            return <HomeItem name={item.name} price={item.price} />;
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-around",
  },
});
