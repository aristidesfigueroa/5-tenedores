
// Usuario no tiene cuenta, entonces le presentamos 
// FORMULARIO DE REGISTRO DE CUENTA -- REGISTER FORM

// Dependiecia version 0.9.1 para envolver el formulario correo-contraseña... y que vaya subiendo
// todos los input.
// yarn add react-native-keyboard-aware-scroll-view@~0.9.1
//https://classic.yarnpkg.com/es-ES/package/react-native-keyboard-aware-scroll-view

// Otro paquete que se instalo para manejo de Array y así validar las contraseñas fue
// LODASH ==>
// Bajamos el paquete: yarn add lodash
// OJO, luego actualizamos expo cli: yarn global add expo-cli 

import React, { useState } from "react";
import { StyleSheet, View  } from "react-native";
import { Icon,Input,Button } from 'react-native-elements';
import {validarEmail} from '../../utils/validaciones';
import { size, isEmpty } from 'lodash';

export default function RegisterForm() {      
    
    const [verPassC, setPassC] = useState(false); // para mostrar/ocular Constaseña 
    const [verPassR, setPassR] = useState(false); // para mostrar/ocular Constaseña 
    // para guardar los datos de Correo-contraseña..validarlos y luego enviarlos a Firebase Capitulo 53
    const [formData, setformData] = useState(defaultFormData()); // Inicializa objeto vacío

    /* 
        OnSubmit
        Acciones a realizar cuando el usuario presiona BOTON - UNIRSE - 
        #1 Validar los 3 Inputs 
        #2 Inicia validando cuenta de correo con función interna.  
    */
    const onSubmit = () => {
        if (isEmpty(formData.email)         ||
            isEmpty(formData.password)      ||
            isEmpty(formData.repeatPassword) ) {
            console.log('Ingresar todos los campos');
            
        }else{            
            validarEmail(formData.email) ? 
            (formData.password === formData.repeatPassword) ?
            (size(formData.password) >= 6)    ? 
            console.log('VALIDACIÓN EXITOSA') :
            console.log('password tiene que ser minimo de 6 caracteres')

            :
            console.log('Contraseñas TIENEN QUE SER IGUALES')
            
            
            : 
            console.log('email INVALIDO');

            // (formData.password === formData.repeatPassword) ?
            // console.log('Contraseñas correctas')            :
            // console.log('Contraseñas TIENEN QUE SER IGUALES');
            // (size(formData.password) >= 6)    ? 
            // console.log('VALIDACIÓN EXITOSA') :
            // console.log('password tiene que ser minimo de 6 caracteres');
            
        }
        
        
    }

    /* 
        OnChangeInput
        Para capturar el tipo de Input que se esta actualizando 
        e : retorna el evento del <Input onChage{(e) => onChage(e, "email")} />
        typeInput : "Input que se esta modificando"  
    */
    const onChangeInput = (e, typeInput) => {
        // console.log(e.nativeEvent.text);
        // console.log(typeInput);
        // setformData({ [typeInput] : e.nativeEvent.text }); Solo deja el último valor
        setformData({...formData,[typeInput] : e.nativeEvent.text });     
    }



    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange={(e) => onChangeInput(e, "email")}
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
                onChange={(e) => onChangeInput(e, "password")}
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
                onChange={(e) => onChangeInput(e, "repeatPassword")}
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
                onPress={onSubmit}               
              />                      
        </View>
);

}

function defaultFormData() {
    return{
        email: "",
        password: "",
        repeatPassword: "",

    };
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

