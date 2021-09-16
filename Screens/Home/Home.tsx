import React from "react";
import { FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootState } from "../../tools/redux/store";
import { useSelector } from "react-redux";

import Header from "../../Components/Header/Header";
import Special from "../../Components/Special/Special";
import HomeItem from "../../Components/HomeItem/HomeItem";

export default function Home() {
  const products = useSelector((state: RootState) => state.app.products);

  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        style={{
          backgroundColor: "#353536",
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Special />
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
