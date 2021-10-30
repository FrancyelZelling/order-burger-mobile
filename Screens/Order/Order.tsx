import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { styles } from './Styles'

import Deliver from "../../Components/Deliver/Deliver"

const Order = () => {
  const [deliver, setDeliver] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalValue}>$174,55</Text>
        <Text style={styles.totalItems}>3 Items</Text>
      </View>
      {deliver ? <Deliver /> : <Text>Pick Up</Text>}
    </View>
  )
}

export default Order
