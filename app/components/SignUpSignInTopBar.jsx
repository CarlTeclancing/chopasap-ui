import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SignUpSignInTopBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/images/back.png')}
      />

      <View style={styles.inner}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate('EmailLogin')}
        >
          <Text style={styles.btnPrimarytext}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.btnPrimarytext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpSignInTopBar;
const styles = StyleSheet.create({
    container:{
        height:'100px',
        width:'90%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop:0,

    },
    inner:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'flex-start',
        
    },
    buttonPrimary:{
        backgroundColor:'#FFCF70',
        paddingLeft:24,
        paddingRight:24,
        paddingTop:12,
        paddingBottom:12,
        margin:6,
        borderRadius:24,
    }
})