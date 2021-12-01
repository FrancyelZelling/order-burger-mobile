import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./Styles";
import Product from "../../types/ProductType";

interface HomeProps {
  item: Product;
}

const img = require("../../assets/burger.jpg");

const HomeItem: React.FC<HomeProps> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.containerPrice}>
        <Text style={styles.itemPrice}>$ {item.price}</Text>
        <Pressable
          style={styles.itemBtn}
          onPress={() => navigation.navigate("Item", { item })}
        >
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeItem;
