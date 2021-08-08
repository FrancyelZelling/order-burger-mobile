import React, {useState, useEffect}from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getItems } from "../api/api";
import Product from "../types/ProductType"

import HomeItem from "../Components/HomeItem";

export default function Home() {
  const products = getItems()
  const [items, setItems] = useState<Product[]>(products)

  return (
    <View style={styles.container}>
      {items?.map(item => (
        <HomeItem key={item.id} name={item.name} price={item.price} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 40
  },
});
