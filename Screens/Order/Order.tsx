import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { styles } from './Styles'

import { RootState } from "../../tools/redux/store";
import { useSelector } from "react-redux";

import Deliver from "../../Components/Deliver/Deliver"

const Order = () => {
  const cart = useSelector((state: RootState) => state.app.cart);

  const [deliver, setDeliver] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalValue}>{cart.total}</Text>
        <Text style={styles.totalItems}>{cart.items} {cart.items === 1 ? "item" : "items"}</Text>
      </View>
      {deliver ? <Deliver /> : <Text>Pick Up</Text>}
    </View>
  )
}

export default Order
