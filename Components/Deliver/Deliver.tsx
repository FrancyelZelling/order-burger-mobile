import React, { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './Styles';

const Deliver = () => {
  const [address, onChangeAdress] = useState("")
  const [district, onChangeDistrict] = useState("")
  const [addressNumber, onChangeAdressNumber] = useState("")
  const [notes, onChangeNotes] = useState("")
  const [money, setMoney] = useState(false)
  const [creditCard, setCreditCard] = useState(false)

  const changePayment = (moneyPayment: boolean) => {
   if (moneyPayment){
    setCreditCard(false)
    setMoney(!money)
   } else {
     setMoney(false)
     setCreditCard(!creditCard)
   }
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={[styles.addressInput, styles.input]} onChangeText={onChangeAdress} value={address} keyboardType="default" />
        </View>
        <View style={styles.smallContainer}>
          <View style={styles.districtContainer}>
            <Text style={styles.label}>District</Text>
            <TextInput style={[styles.districtInput, styles.input]} onChangeText={onChangeDistrict} value={district} keyboardType="default" />
          </View>
          <View style={styles.addressNumberContainer}>
            <Text style={styles.label}>Address Number</Text>
            <TextInput style={[styles.addressNumberInput, styles.input]} onChangeText={onChangeAdressNumber} value={addressNumber} keyboardType="default" />
          </View>
        </View>
        <View style={styles.notesContainer}>
          <Text style={styles.label}>Notes</Text>
          <TextInput style={[styles.notesInput, styles.input]}  onChangeText={onChangeNotes} value={notes} keyboardType="default" multiline numberOfLines={2} />
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment Method</Text>
        <View style={styles.iconsContainer}>
          <Pressable onPress={() => changePayment(true)}>
            <FontAwesome style={money ? [styles.icon, styles.iconFocused] : styles.icon} name="money" size={60} color="white" />
          </Pressable>
          <Pressable onPress={() => changePayment(false)}>
            <FontAwesome style={creditCard ? [styles.icon, styles.iconFocused] : styles.icon}name="credit-card" size={54} color="white"/>
          </Pressable>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Deliver
