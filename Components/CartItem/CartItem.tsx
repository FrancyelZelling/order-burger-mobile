import React from "react";
import { View, Text, Image, Pressable } from "react-native";

import {styles} from "./Styles"

const img = require("../../assets/burger.jpg");

const CartItem = () => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>Double Cheddar</Text>
        <Text style={styles.price}>$44,59 </Text>
      </View>
      <Pressable style={styles.removeBtn}>
        <Text>X</Text>
      </Pressable>
    </View>
  );
};

export default CartItem;
