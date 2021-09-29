import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function onboarding1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../images/anh2.png')}
      />
      <Text style={styles.textTittle}>Find your  Comfort</Text>
      <Text style={styles.textTittle1}>Food here</Text>
      <Text style={styles.textSubTitle}>Here You Can find a chef or dish for every</Text>
      <Text style={styles.textSubTitle1}>taste and color. Enjoy!</Text>
      <TouchableOpacity style={styles.boxBtn} onPress={() => { navigation.navigate('on2') }}>
        <Text style={styles.textBtn}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 435,
    marginTop: 54,
    marginBottom: 42,

  },
  boxText: {
    width: 244,
    height: 122,
    borderWidth: 1,
    borderColor: '#000',
  },
  textTittle: {
    fontSize: 22,
    fontWeight: 'bold',

  },
  textTittle1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textSubTitle: {
    fontSize: 12,

  },
  textSubTitle1: {
    fontSize: 12,
    marginBottom: 42,
  },
  boxBtn: {
    width: 157,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#41DB85',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtn: {
    fontSize: 16,
    fontWeight: 'bold'
  },
})
