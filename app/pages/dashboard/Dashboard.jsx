import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image 
        style={styles.logo}
        source={require('../../../assets/images/logov.png')}
        />
      <View style={styles.lf}>
        <Image 
          style={styles.notification}
          source={require('../../../assets/images/bell.png')}
          />

        <Image 
          style={styles.profile}
          source={require('../../../assets/images/profile.png')}
          />

      </View>
      </View>
      <View style={styles.promote}>
        <View style={styles.ls}>
          <Text style={styles.btext}>Promote with us now and get more sales and listings</Text>
          <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() =>  navigation.navigate('Dashbaord')}
            >
                <Text style={styles.btnPrimarytext}>Promote With Us</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ls}>
            <Image 
            style={styles.profile}
            source={require('../../../assets/images/mcart.png')}
            />
          
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.htext}>Todays Menu</Text>
        <TouchableOpacity
                style={styles.btn}
                onPress={() =>  navigation.navigate('')}
            >
                <Text style={styles.white}>Update Menu</Text>
            </TouchableOpacity>

      </View>
      
    </View>
  )
}

export default Dashboard


const styles = StyleSheet.create({
  container:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  },
  header:{
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:24,
    alignItems:'center'
  },
  lf:{
    width:80,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  promote:{
    backgroundColor:'#FFCF70',
    width:'90%',
    borderRadius:12,
    marginTop:24,
    padding:24,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  buttonPrimary:{
    borderWidth:2,
    borderColor:'#D2202F',
    height: 58,
    width:'90%',
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center',
    marginTop:24,

},
btn:{
  backgroundColor:'#D2202F',
  height: 58,
  width:'100',
  color:'white',
  borderRadius:12,
  alignItems:'center',
  justifyContent:'center',
  marginTop:24,
},
white:{
  color:'white'
},
btext:{
  color:'black',
  fontSize: 16,
  fontWeight:'bold',
  textAlign: 'left',

},
htext:{
  color:'black',
  fontSize: 24,
  fontWeight:'bold',
  textAlign: 'left',
},
ls:{
  width:'60%'
}
})