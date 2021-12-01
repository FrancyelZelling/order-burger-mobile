import React from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { RootState } from "../../tools/redux/store";
import { useSelector } from "react-redux";

import Special from "../../Components/Special/Special";
import HomeItem from "../../Components/HomeItem/HomeItem";

export default function Home() {
  const products = useSelector((state: RootState) => state.app.products);

  return (
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
          return <HomeItem item={item} />;
        }}
      />
    </ScrollView>
  );
}
