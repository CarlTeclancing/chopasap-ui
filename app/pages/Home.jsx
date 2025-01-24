import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function HomeScreen({ navigation }){
    return(
        
            

                <View style={styles.container}>
                    
                    <Image 
                    style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                    />
                    <Text style={styles.btext}>Sign up or login in 
                    No password required
                    </Text>
                    {/* TouchableOpacity */}
                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={() =>  navigation.navigate('EmailLogin')}
                    >
                        <Text style={styles.btnPrimarytext}>Continue with email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonSecondary}
                        onPress={() =>  navigation.navigate('NumberLogin')}
                    >
                        <Text style={styles.btnSecondarytext}>Continue with Phone</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>By clicking search nearby or continue with email, phone number or google you agree to chop asap’s terms and conditions</Text>

                </View>
            

        
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        justifyContent:'center',
    },
    btext:{
        color:'black',
        fontSize: 32,
        fontWeight:'bold',
        textAlign: 'center',
        marginTop:24,
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
    btnSecondarytext:{
        color:'#D2202F',
        fontSize:14,
    },
    text:{
        with:'90%',
        margin:24,
        textAlign:'center'
    }
})