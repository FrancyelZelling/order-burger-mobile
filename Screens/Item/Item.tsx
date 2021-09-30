import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./Styles";

const Item = ({ route, navigaton }) => {
  const { name, price } = route.params;
  const image = require("../../assets/burger.jpg");

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nulla
        risus ultricies nec morbi eget nisi, rhoncus. Sit sed cursus adipiscing
        varius turpis aenean felis diam magna. Eget arcu, augue quam ultricies
        duis ac egestas a consequat.
      </Text>
      <View style={styles.priceSection}>
        <Text style={styles.price}>$ {price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
