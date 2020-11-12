// Para validar un usuario a ver si esta registado o no en fireBase
// https://firebase.google.com/docs/auth/web/start?authuser=0

/**
 * 
 * firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
 */


import React, { useState } from "react";
import { StyleSheet, View  } from "react-native";
import { Icon,Input,Button } from 'react-native-elements';
import { size, isEmpty } from 'lodash';
import * as firebase from "firebase";
import { useNavigation } from '@react-navigation/native/'

import Loading from "../Loading";


import {validarEmail} from '../../utils/validaciones';

export default function LoginForm( props ) {  

  const { refToast } = props;

  const [verPassC, setPassC] = useState(false); // para mostrar/ocular Constaseña
  const [formData, setformData] = useState(defaultFormData()); // Inicializa objeto vacío
  const [loading, setLoading] = useState(false); // para controlar Loading.js

  const myNavigation = useNavigation(); // para irme a UserLogged.js

      /**
       *  onChangeInput();
       *  Cada vez que se ingrese algo en un campo input lo guadamos en el estado formData
       * @param {*} e 
       * @param {*} typeInput 
       */
      const onChangeInput = (e, typeInput) => {
        // console.log(e.nativeEvent.text);
        // console.log(typeInput);
        // setformData({ [typeInput] : e.nativeEvent.text }); Solo deja el último valor
        setformData({...formData,[typeInput] : e.nativeEvent.text });     
      }

      /* 
            OnSubmit()
            Acciones a realizar cuando el usuario presiona BOTON - UNIRSE - 
            #1 Validar los 2 Inputs 
            #2 Inicia validando cuenta de correo con función interna.  
        */
      const onSubmit = () => {
        // console.log(formData.email);
        if (isEmpty(formData.email)         ||
            isEmpty(formData.password)) {
            // console.log('Ingresar todos los campos');
            refToast.current.show('Todos lo campos son Obligatorios');
            
        }else{            
            validarEmail(formData.email) ? 
            

            (size(formData.password) >= 6)    ? 

            valFireBase()                     : // función que valida cuenta mail
            
            refToast.current.show('password tiene que ser minimo de 6 caracteres') : 
            
            refToast.current.show('email incorrecto');            
            
        }        
        
    }

    /* 
            valFireBase()
            Envía a fireBase mail y contraseña para login
        */
      const valFireBase = () => {

        console.log('valFireBase');
        setLoading(true);
    
        firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
          //  console.log('Inicio ok');        
            setLoading(false);
            myNavigation.navigate("account"); // es enviado Account.js para ir a UserLogged.js
        })
        .catch((err) => {
            setLoading(false);
          //  console.log(err);
            refToast.current.show("email o contraseña incorrecta");
            
        });        
        

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
            
            <Button
                title="Iniciar Sesión" 
                containerStyle={styles.myContainer}
                buttonStyle={styles.myBtn}              
                onPress={onSubmit}               
              />  
              <Loading isVisible={loading} text="Iniciando Sesión" />                     
        </View>
);

}

function defaultFormData() {
    return{
        email: "",
        password: "",
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

