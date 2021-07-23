import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface HomeProps {
  name: string;
  price: number;
}

const HomeItem: React.FC<HomeProps> = ({ name, price}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>Price: ${price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '45%',
        margin: 5
      }
  })

export default HomeItem;