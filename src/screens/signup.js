import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';


const signup = () => {
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
      <Text style={styles.title}>Sign up for free</Text>
      <View style={styles.boxSignup} >
        <Image
          style={styles.profile}
          source={require('../images/icon_Profile.png')}
        />
        <TextInput
          placeholder='Anamwp...'
        />
      </View>
      <View style={styles.boxSignup} >
        <Image
          style={styles.email}
          source={require('../images/icon_Message.png')}
        />
        <TextInput
          placeholder='Email'
        />
      </View>
      <View style={styles.boxLock} >
        <View style={styles.boxPassword}>
          <Image
            style={styles.password}
            source={require('../images/icon_lock.png')}
          />
          <TextInput
            placeholder='Password'
          />
        </View>
        <AntDesign name='eye' size={20}
          style={{ marginHorizontal: 20 }}
        />
      </View>
      <View style={styles.boxchecklist}>
        <View style={styles.checkboxlist}>
          <AntDesign name='checkcircle' size={20} color="#44DE86"
            style={styles.icon}
          />
          <Text style={styles.textCheckList}>Keep Me Signed In</Text>
        </View>
        <View style={styles.checkboxlist}>
          <AntDesign name='checkcircle' size={20} color="#44DE86"
            style={styles.icon}
          />
          <Text style={styles.textCheckList}>Email Me About Special Pricing</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.boxBtn}>
        <Text style={styles.textBtn}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.textFooter}>already have an account?</Text>
    </SafeAreaView>
  )
}

export default signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  background: {

  },
  logo: {
    position: 'absolute',
    top: 49
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxSignup: {
    flexDirection: 'row',
    height: 57,
    width: '95%',
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#edeef0'
  },
  profile: {
    height: 24,
    width: 24,
    marginHorizontal: 20,
  },
  email: {
    height: 24,
    width: 24,
    marginHorizontal: 20,
  },
  password: {
    height: 24,
    width: 24,
    marginHorizontal: 20,
  },
  boxLock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    width: '95%',
    height: 57,
    backgroundColor: '#edeef0',
    marginBottom: 10,
  },
  boxPassword: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 25,
    marginRight: 8,
  },
  checkboxlist: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  textCheckList: {
    fontSize: 12,
  },
  boxchecklist: {
    width: '95%',
    marginBottom: 20,
  },
  boxBtn: {
    height: 57,
    width: 175,
    backgroundColor: '#44DE86',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,

  },
  textBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',

  },
  textFooter: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#44DE86'
  },
})