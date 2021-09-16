import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

interface HomeProps {
  name: string;
  price: number;
}

const imgUrl = "https://img2.gratispng.com/20171216/2b4/hamburger-burger-png-image-5a35e0977d5010.2702402215134803435133.jpg"

const HomeItem: React.FC<HomeProps> = ({ name, price}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: imgUrl}} />
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemDesc}>Good burger</Text>
      <Text style={styles.itemPrice}>Price: ${price}</Text>
      <Pressable style={styles.itemBtn} onPress={() => console.log("press")}>
        <Text>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 150,
        height: 200,
        margin: 5
      },
      img: {
        width: 110,
        height: 110,
        alignSelf: "center"
      },
      itemName: {
          fontSize: 20,
          fontWeight: "bold",
          paddingLeft: 15
        },
      itemDesc: {
          fontSize: 10,
          fontWeight: '100',
          paddingLeft: 15
        },
      itemPrice: {
          fontSize: 12,
          fontWeight: '400',
          paddingLeft: 15,
          marginTop: 5,
          marginBottom: 10
        },
      itemBtn: {
          width: 20,
          height: 20,
          position: 'absolute',
          bottom: 10,
          right: 10,
          backgroundColor: "#d8d14e",
          borderRadius: 10,
          alignItems: "center"
        }
  })

export default HomeItem;
