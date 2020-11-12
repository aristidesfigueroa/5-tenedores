// LOGIN  -- INICIAR SECIÓN --
//            LOGIN
//            REGISTER onPress={() => myNavigation.navigate("register")}

import React, { useRef } from "react";
import { StyleSheet, Image, ScrollView, View, Text } from "react-native";
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Toast from "react-native-easy-toast";


import LoginForm from '../../components/accounts/LoginForm';


export default function Login() {  
    
    const refToast = useRef();
    
    

    return (
        <ScrollView>
        
            <Image 
              source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
              resizeMode="contain"
              style={styles.myLogo}
            />
          <View style={styles.viewContainer} >
            <LoginForm refToast={refToast} />
            <CreateAccount />
          </View>          
          <Divider style={styles.myDivider} />
          <Text>Social Login</Text>
          <Toast ref={refToast} position="center" opacity={0.9} />

        </ScrollView>
        

    );
}

function CreateAccount () {
    
    const myNavigation = useNavigation();

    return(
        <Text style={styles.textRegistro}>
            ¿Aún no tienes una cuenta?{" "}
            <Text 
                style={styles.btnRegistrate}
                // onPress={() => console.log('Clik- Regístrate')}
                onPress={() => myNavigation.navigate("register")}
            >Regístrate            
            </Text>
        </Text>
    );
}


// Creando constante de estilos de nuestra screen "OJO StyleSheey.create" 
const styles = StyleSheet.create({
    myLogo: {
        width: "100%",
        height: 150,
        marginTop: 20,
    }, 
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    textRegistro: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,

    },
    btnRegistrate: {
        color: "#00a680",
        fontWeight: "bold",
    },
    myDivider: {
        backgroundColor: "#00a680",
        margin: 40,
    },

});