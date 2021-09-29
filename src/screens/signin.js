import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function signin({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.background}
        source={require('../images/background.png')}
      />
      <Image
        style={styles.logo}
        source={require('../images/logo.png')}
      />
      <Text style={styles.Title}>Login To Your Account</Text>
      <View style={styles.boxEmail}>
        <TextInput
          style={styles.textEmail}
          placeholder='Email'
        />
      </View>
      <View style={styles.boxPassword}>
        <TextInput
          style={styles.textPassword}
          placeholder='Password'
        />
      </View>
      <Text style={styles.subtext}>Or Continue With</Text>
      <View style={styles.boxBtn}>
        <View style={styles.boxFB}>
          <Image
            style={styles.logoFB}
            source={require('../images/iconFB.png')}
          />
          <Text style={styles.textBtn}>Facebook</Text>
        </View>
        <View style={styles.boxGG}>
          <Image
            style={styles.logoGG}
            source={require('../images/iconGG.png')}
          />
          <Text style={styles.textBtn}>Google</Text>
        </View>
      </View>
      <Text style={styles.textGreen}>Forgot your password?</Text>
      <TouchableOpacity style={styles.boxLogin} onPress={() => { navigation.navigate('signup') }}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    width: '100%',
    height: 370,
  },
  logo: {
    position: 'absolute',
    top: 47,
    width: 188,
    height: 203,
  },
  logoFB: {
    width: 25,
    height: 25
  },
  logoGG: {
    width: 25,
    height: 25,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 310
  },
  boxEmail: {
    width: '95%',
    height: 57,
    marginHorizontal: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    justifyContent: 'center'
  },
  textEmail: {
    paddingLeft: 28
  },
  boxPassword: {
    width: '95%',
    height: 57,
    marginHorizontal: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    justifyContent: 'center'
  },
  textPassword: {
    paddingLeft: 28
  },
  subtext: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxBtn: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  boxFB: {
    flexDirection: 'row',
    width: '45%',
    height: 57,
    alignItems: 'center',
    paddingLeft: 22,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  boxGG: {
    flexDirection: 'row',
    width: '45%',
    height: 57,
    alignItems: 'center',
    paddingLeft: 22,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  textBtn: {
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: 'bold'
  },
  textGreen: {
    color: '#44DE86',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 36
  },
  boxLogin: {
    width: 141,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#44DE86',
    borderRadius: 15,

  },
  textLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
})
