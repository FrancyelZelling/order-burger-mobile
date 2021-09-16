import React from "react";
import { View, Text, Image, Pressable } from "react-native";

import { styles } from "./Styles";

export default function Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/photo-1561758033-d89a9ad46330.webp")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.price}>$ 39</Text>
      </View>
      <View style={styles.sideContent}>
        <Text style={styles.title}>Today Special</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sir amet, consectetur adipiscing elit. Amet n
        </Text>
        <Pressable style={styles.button} onPress={() => console.log("test")}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}
