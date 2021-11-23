import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../tools/redux/store";
import { useSelector } from "react-redux";

import CartItem from "../../Components/CartItem/CartItem";

const ShoppingCart = () => {
  const navigation = useNavigation();

  const cart = useSelector((state: RootState) => state.app.cart);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerChildProps}
    >
      <View style={styles.header}>
        <Text style={styles.total}> Total: {cart.total}</Text>
        <TouchableOpacity style={styles.proceedBtn} onPress={() => navigation.navigate("Order")}>
          <Text>Proceed</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.itemsContainer}>
       {cart.products.map((item) => (
        <CartItem item={item} />
       ))} 
      </ScrollView>
    </ScrollView>
  );
};

export default ShoppingCart;
