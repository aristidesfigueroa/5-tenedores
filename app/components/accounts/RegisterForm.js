
// Usuario no tiene cuenta, entonces le presentamos 
// FORMULARIO DE REGISTRO DE CUENTA -- REGISTER FORM

// Dependiecia version 0.9.1 para envolver el formulario correo-contraseña... y que vaya subiendo
// todos los input.
// yarn add react-native-keyboard-aware-scroll-view@~0.9.1
//https://classic.yarnpkg.com/es-ES/package/react-native-keyboard-aware-scroll-view

import React, { useState } from "react";
import { StyleSheet, View  } from "react-native";
import { Icon,Input,Button } from 'react-native-elements';

export default function RegisterForm() {      
    
    const [verPassC, setPassC] = useState(false); // para mostrar/ocular Constaseña 
    const [verPassR, setPassR] = useState(false); // para mostrar/ocular Constaseña 

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon 
                    type="material-community"
                    name = "at" // at= @ email-outline
                    iconStyle={styles.myIcons} //damos estilo al icono
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={verPassC ? false : true}
                rightIcon={
                    <Icon 
                    type="material-community"
                    name = { verPassC ? "eye-outline" : "eye-off-outline" } // aplicando estado
                    iconStyle={styles.myIcons} //damos estilo al icono
                    onPress={() => setPassC(!verPassC)} // Con esto hacemos Botón el Icono
                    />
                }
            />
            <Input
                placeholder="Confirmar Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={verPassR ? false : true}
                rightIcon={
                    <Icon 
                    type="material-community"
                    name = { verPassR ? "eye-outline" : "eye-off-outline" } // aplicando estado
                    iconStyle={styles.myIcons} //damos estilo al icono
                    onPress={() => setPassR(!verPassR)} // Con esto hacemos Botón el Icono
                    />
                }
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        width: "95%",                
    },
    myIcons: {
        color: "#c1c1c1",        
    },
    

});

