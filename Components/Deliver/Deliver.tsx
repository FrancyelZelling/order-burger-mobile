import React, { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './Styles';

const Deliver = () => {
  const [address, onChangeAdress] = useState("")
  const [district, onChangeDistrict] = useState("")
  const [addressNumber, onChangeAdressNumber] = useState("")
  const [notes, onChangeNotes] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.addressInput} onChangeText={onChangeAdress} value={address} keyboardType="default" />
        </View>
        <View style={styles.districkContainer}>
          <Text style={styles.label}>District</Text>
          <TextInput style={styles.districtInput} onChangeText={onChangeDistrict} value={district} keyboardType="default" />
        </View>
        <View style={styles.addressNumberContainer}>
          <Text style={styles.label}>Address Number</Text>
          <TextInput style={styles.addressNumberContainer} onChangeText={onChangeAdressNumber} value={addressNumber} keyboardType="default" />
        </View>
        <View style={styles.notesContainer}>
          <Text style={styles.label}>Notes</Text>
          <TextInput style={styles.notesContainer} onChangeText={onChangeNotes} value={notes} keyboardType="default" multiline numberOfLines={2} />
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment Method</Text>
        <View style={styles.iconsContainer}>
          <FontAwesome name="money" size={48} color="white" />
          <FontAwesome name="credit-card" size={48} color="white" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Deliver
