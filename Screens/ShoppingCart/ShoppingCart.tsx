import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { useNavigation } from "@react-navigation/native";

import CartItem from "../../Components/CartItem/CartItem";

const ShoppingCart = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerChildProps}
    >
      <View style={styles.header}>
        <Text style={styles.total}> Total: $174,55</Text>
        <TouchableOpacity style={styles.proceedBtn} onPress={() => navigation.navigate("Order")}>
          <Text>Proceed</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.itemsContainer}>
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
    </ScrollView>
  );
};

export default ShoppingCart;
