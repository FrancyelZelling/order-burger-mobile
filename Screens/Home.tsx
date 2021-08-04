import React, {useState, useEffect}from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import axios from 'axios'
import Product from "../types/ProductType"

import HomeItem from "../Components/HomeItem";

export default function Home() {

  const defaultItems: Product[] = [
    {
      id:1,
      name: "item 1",
      description: "tasty",
      price: 12.00,
      category: {
        id: 1,
        name: "Hamburger"
      },
    },
    {
      id:2,
      name: "item 2",
      description: "tasty",
      price: 12.00,
      category: {
        id: 1,
        name: "Hamburger"
      },
    },
    {
      id:3,
      name: "item 3",
      description: "tasty",
      price: 12.00,
      category: {
        id: 1,
        name: "Hamburger"
      },
    },
  ]
  const [items, setItems] = useState<Product[]>(defaultItems)


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
