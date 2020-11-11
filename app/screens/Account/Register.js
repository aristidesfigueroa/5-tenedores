// STACK -- INICIAR SESIÓN --

import React, { useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";

// Acá pusimos el envoltorio de correo-contraseña-confirmar....
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Importamos paquete: yarn add react-native-easy-toast@~1.2.0
// para mostrar las alertas de formulario RegisterForm, pero lo configuramos acá en componente Register

import Toast from "react-native-easy-toast";


import RegisterForm from "../../components/accounts/RegisterForm";


export default function Register() {   

    const refToast = useRef();
    // console.log(refToast);

    return (
        <KeyboardAwareScrollView>
            <Image 
              source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
              resizeMode="contain"
              style={styles.myLogo}
            /> 
            <View style={styles.myViewForm} >
                <RegisterForm refToast={refToast} />
            </View>
            <Toast ref={refToast} position="center" opacity={0.9} />
                  
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
