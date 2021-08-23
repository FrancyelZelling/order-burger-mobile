import React, {useState, useEffect}from "react";
import { FlatList, StyleSheet, Text, View , Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { RootState } from '../tools/redux/store'
import { useSelector } from 'react-redux'


import HomeItem from "../Components/HomeItem";

export default function Home() {
  const products = useSelector((state: RootState) => state.app.products)

  return (
    <SafeAreaView style={styles.container}>
      <Text>Every Bite a</Text>
      <Text>Better Burger!</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.name}
        numColumns={2}
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
