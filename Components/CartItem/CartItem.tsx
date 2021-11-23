import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import ProductType from "../../types/ProductType"
import {styles} from "./Styles"

const img = require("../../assets/burger.jpg");

interface CartItemProps {
  item: ProductType
}

const CartItem: React.FC<CartItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Pressable style={styles.removeBtn}>
        <Text>X</Text>
      </Pressable>
    </View>
  );
};

export default CartItem;
