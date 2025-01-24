import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import React from 'react'
import SignUpSignInTopBar from '../components/SignUpSignInTopBar';

const SignUp = ({ navigation }) => {
  return (
    <ScrollView>

            <View style={styles.container}>
                <SignUpSignInTopBar navigation={navigation} />
        
            <Text style={styles.btext}>Sign Up </Text>
            
            <View style={styles.narrow}>

                <Text style={styles.label}>First Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Fist name"
                    value=''
                    onChangeText={(text) => ''}
                />
            </View>
            
            <View style={styles.narrow}>

                <Text style={styles.label}>Last Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your first name"
                    value=''
                    onChangeText={(text) => ''}
                />
            </View>

            <View style={styles.narrow}>

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Email ..........."
                value=''
                onChangeText={(text) => ''}
            />
            </View>


            <View style={styles.narrow}>

                <Text style={styles.label}>Number:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter number ..........."
                    value=''
                    onChangeText={(text) => ''}
                />
            </View>
            {/* TouchableOpacity */}
            <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() =>  navigation.navigate('EmailLogin')}
            >
                <Text style={styles.btnPrimarytext}>Confirm Email</Text>
            </TouchableOpacity>

            <Text style={styles.text}>By continuing with sign in we may send you a one time verification code via text message to phone number associated with your account. Message and data rates may apply</Text>
            <Text>------------------------ OR ------------------------</Text>
            <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() =>  navigation.navigate('NumberLogin')}
            >
                <Text style={styles.btnSecondarytext}>Continue with Phone</Text>
            </TouchableOpacity>

        </View>
    </ScrollView>
  )
}

export default SignUp



const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:0,
    },
    narrow:{
        width:'90%',
        marginTop:24,
    },
    btext:{
        color:'black',
        fontSize: 32,
        fontWeight:'bold',
        textAlign: 'center',
        margin:24,
    },
    buttonPrimary:{
        backgroundColor:'#D2202F',
        height: 58,
        width:'90%',
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        marginTop:24,

    },
    btnPrimarytext:{
        color:'white',
        fontSize:14,
    },
    buttonSecondary:{
        borderWidth:2,
        borderColor:'#D2202F',
        height: 58,
        width:'90%',
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        marginTop:24,
    },
    input:{
        borderWidth: 1,
        borderColor:'black',
        height: 58,
        width:'100%',
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        marginTop:24,
    },
    btnSecondarytext:{
        color:'#D2202F',
        fontSize:14,
    },
    text:{
        with:'90%',
        margin:24,
        textAlign:'left'
    }
})