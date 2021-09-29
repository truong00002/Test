import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.header}>
          <View style={styles.boxtitle}>
            <Text style={styles.title}>Find Your</Text>
            <Text style={styles.title}>Favorite Food</Text>
          </View>
          <View style={styles.notification}>
            <Image
              source={require('../images/Icon_Notifiaction.png')}
              style={styles.iconNotification}
            />
          </View>
        </View>
        <View style={styles.search}>
          <View style={styles.boxSearch}>
            <AntDesign name='search1' size={24} color='#DA6317'
              style={{ marginLeft: 18, marginRight: 10 }}
            />
            <TextInput
              placeholder='What do you want to order?'
              style={styles.inputSearch}
            />
          </View>
          <View style={styles.boxFilter}>
            <Image
              source={require('../images/Filter.png')}
              style={styles.iconFilter}
            />
          </View>
        </View>
        <View style={styles.subHeader}>
          <Image
            source={require('../images/Images.png')}
            style={styles.Imagebg}
          />
          <View style={styles.boxSubTitle}>
            <Text style={styles.subTitle}>Special Deal For</Text>
            <Text style={styles.subTitle2}>October</Text>
            <TouchableOpacity style={styles.boxBtn}>
              <Text style={styles.textBtn}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textmiddle}>
          <Text style={styles.textLeft}>Nearest Restaurant</Text>
          <Text style={styles.textRight}>View More</Text>
        </View>
        <View style={styles.allList}>
          <View style={styles.List}>
            <Image
              source={require('../images/Resturant_Image.png')}
              style={styles.imageRes}
            />
            <Text style={styles.textBold}>Vegan Resto</Text>
            <Text style={styles.textTime}>12 Mins</Text>
          </View>
          <View style={styles.List}>
            <Image
              source={require('../images/Restaurant_Image2.png')}
              style={styles.imageRes}
            />
            <Text style={styles.textBold}>Healthy Food</Text>
            <Text style={styles.textTime}>8 Mins</Text>
          </View>
        </View>
        <View style={styles.textmiddle}>
          <Text style={styles.textLeft}>Popular Menu</Text>
          <Text style={styles.textRight}>View More</Text>
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.menu}
              source={require('../images/Photo_menu.png')}
            />
            <Text style={styles.textFooter}>Green Noddle</Text>
          </View>
          <Text style={styles.textPrice}>$15</Text>
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.menu}
              source={require('../images/Photo_menu.png')}
            />
            <Text style={styles.textFooter}>Green Noddle</Text>
          </View>
          <Text style={styles.textPrice}>$15</Text>
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.menu}
              source={require('../images/Photo_menu.png')}
            />
            <Text style={styles.textFooter}>Green Noddle</Text>
          </View>
          <Text style={styles.textPrice}>$15</Text>
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.menu}
              source={require('../images/Photo_menu.png')}
            />
            <Text style={styles.textFooter}>Green Noddle</Text>
          </View>
          <Text style={styles.textPrice}>$15</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textPrice: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FEAD1D',
    marginHorizontal: 15
  },
  textFooter: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10
  },
  menu: {
    marginHorizontal: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    height: 87,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  allList: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  List: {
    height: 184,
    width: 147,
    backgroundColor: '#fff',
    marginHorizontal: 25,
    alignItems: 'center',
    borderRadius: 15,
  },
  imageRes: {
    height: 73,
    width: 96,
    marginTop: 26,
    marginBottom: 17,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textTime: {
    color: '#86848F',
  },
  textmiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  textLeft: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textRight: {
    fontSize: 12,
    color: '#FF7C32'
  },
  subHeader: {
    flexDirection: 'row',
  },
  Imagebg: {
    height: 150,
    width: '90%',
    backgroundColor: '#44DE86',
    marginLeft: 25,
    borderRadius: 15,
    marginBottom: 25,
  },
  boxSubTitle: {
    position: 'absolute',
    top: 25,
    right: 50
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  boxBtn: {
    height: 35,
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textBtn: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#44DE86'
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxtitle: {
    marginTop: 60,
    marginLeft: 31,
    marginRight: 27,
    marginBottom: 18,
  },
  title: {
    fontSize: 31,
    fontWeight: 'bold',
  },
  notification: {
    height: 45,
    width: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 71,
    marginRight: 39,
    backgroundColor: '#fff'
  },
  iconNotification: {
    height: 23,
    width: 19,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '70%',
    backgroundColor: "#FFDEA4",
    borderRadius: 15,
    marginLeft: 25,
    marginBottom: 20,
  },
  inputSearch: {

  },
  boxFilter: {
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: "#FFDEA4",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25
  },
  iconFilter: {

  },
})
