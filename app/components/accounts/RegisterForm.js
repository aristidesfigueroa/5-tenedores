
// Usuario no tiene cuenta, entonces le presentamos 
// FORMULARIO DE REGISTRO DE CUENTA -- REGISTER FORM

// Dependiecia version 0.9.1 para envolver el formulario correo-contraseña... y que vaya subiendo
// todos los input.
// yarn add react-native-keyboard-aware-scroll-view@~0.9.1
//https://classic.yarnpkg.com/es-ES/package/react-native-keyboard-aware-scroll-view

import React from "react";
import { StyleSheet, View  } from "react-native";
import { Icon,Input,Button } from 'react-native-elements';

export default function RegisterForm() {      
    

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
            />
            <Input
                placeholder="Confirmar Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
            /> 
            <Button
                title="Unirse" 
                buttonStyle={styles.myBtn}               
                containerStyle={styles.myContainer}                
              />                      
        </View>
);

}

// Creando constante de estilos de nuestra screen "OJO StyleSheey.create" 
const styles = StyleSheet.create({
    formContainer: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        marginTop:30,
    },
    inputForm: {
        width: "100%",
        marginTop: 20,

    },
    myBtn: {
        backgroundColor: "#00a680",
    },
    myContainer: {
        marginTop: 20,
        width: "100%",                
    },
    

});

