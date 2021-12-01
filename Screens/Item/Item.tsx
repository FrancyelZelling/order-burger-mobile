import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addItemToCart } from "../../tools/redux/app/appSlice"
import { useDispatch } from "react-redux"
import Product from "../../types/ProductType";

import { styles } from "./Styles";

const Item = ({ route, navigaton }) => {
  //const item: Product = route.params 
  const { item }: {item: Product } = route.params

  const image = require("../../assets/burger.jpg");

  const dispatch = useDispatch()

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc}>
       {item.description} 
      </Text>
      <View style={styles.priceSection}>
        <Text style={styles.price}>$ {item.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => dispatch(addItemToCart(item))} >
          <Text style={styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Item;
