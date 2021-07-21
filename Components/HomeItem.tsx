import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeItem() {
  return (
    <View style={styles.container}>
      <Text>Hamburger</Text>
      <Text>Price: $19.90</Text>
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

