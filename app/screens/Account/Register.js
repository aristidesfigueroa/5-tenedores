// STACK -- INICIAR SESIÓN --

import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";

// Acá pusimos el envoltorio de correo-contraseña-confirmar....
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import RegisterForm from "../../components/accounts/RegisterForm";


export default function Register() {    

    return (
        <KeyboardAwareScrollView>
            <Image 
              source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
              resizeMode="contain"
              style={styles.myLogo}
            /> 
            <View style={styles.myViewForm} >
                <RegisterForm />
            </View>
                  
        </KeyboardAwareScrollView>    

    );
}


// Creando constante de estilos de nuestra screen "OJO StyleSheey.create" 
const styles = StyleSheet.create({
    myLogo: {
        width: "100%",
        height: 150,
        marginTop: 20,
    },
    myViewForm: {
        marginRight: 40,
        marginLeft: 40,        
    }, 

});
