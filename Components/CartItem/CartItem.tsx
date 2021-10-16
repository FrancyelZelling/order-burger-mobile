import React from "react";
import { View, Text, Image, Pressable } from "react-native";

const img = require("../../assets/burger.jpg");

const CartItem = () => {
  return (
    <View>
      <Image source={img} style={{ width: 30, height: 30 }} />
      <Text>Double Cheddar</Text>
      <Text>$44,59 </Text>
    </View>
  );
};

export default CartItem;
