import React, {useState, useEffect}from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { getItems } from "../api/api";
import Product from "../types/ProductType"

import HomeItem from "../Components/HomeItem";

export default function Home() {
  const products = getItems()
  const [items, setItems] = useState<Product[]>(products)

  return (
    <SafeAreaView style={styles.container}>
      <Text>Every Bite a</Text>
      <Text>Better Burger!</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.name}
        numColumns={2}
        horizontal={false}
        renderItem={({item}) => {
          return (
            <HomeItem name={item.name} price={item.price}  />
          )
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignContent:'space-around'

    }
});
