import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./Styles";

interface HomeProps {
  name: string;
  price: number;
}

const img = require("../../assets/burger.jpg");

const HomeItem: React.FC<HomeProps> = ({ name, price }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.itemName}>{name}</Text>
      <View style={styles.containerPrice}>
        <Text style={styles.itemPrice}>$ {price}</Text>
        <Pressable
          style={styles.itemBtn}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeItem;
