import React from "react";
import { View, Text } from "react-native";

const Item = ({ route, navigaton }) => {
  const { name } = route.params;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Item;
