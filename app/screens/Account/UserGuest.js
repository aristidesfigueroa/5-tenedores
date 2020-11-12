// UserGuest.js (Usario no Logeado) viene de  <-- Accoun.js (donde revisa en fireBase el user )
// si el usuario este logeado, en vez de venir acá lo manda a UserLogged.js

import React from "react";
import {StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function UserGuest() {

    const myNavigation = useNavigation();
    

    return(
        <ScrollView centerContent={true} style={styles.myViewBody}>
          <Image 
              source={require("../../../assets/img/user-guest.jpg")}
              resizeMode="contain"
              style={styles.myImage}
          />
          <Text style={styles.textA} >Consulta tú perfil de 5 Tenedores</Text>
          <Text style={styles.textB}>
              Describe de una forma sencilla, los mejores Restaurantes que visitas,
              tú experiencia y vota cual te ha gustado más.                           
          </Text>
          <View style={styles.myBtnView}>
              <Button
                title="Ver tú perfil"
                buttonStyle={styles.myBtn}
                containerStyle={styles.myContainer}
                onPress={() => myNavigation.navigate("loginUser")}
                // onPress={() => console.log('Clik-Ver perfil')}
              />              
          </View>
       </ScrollView>
    )
}

// Creando constante de estilos de nuestra screen "OJO StyleSheey.create" 
const styles = StyleSheet.create({
    myViewBody: {
        marginLeft: 5,
        marginRight: 5,
    },
    myImage: {
        height: 300,
        width:"100%",
        marginBottom:40,                   
    },
    textA: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",     
    },
    textB: {        
        marginBottom: 20,
        textAlign: "center",     
    },
    myBtnView: {
        flex: 1,
        alignItems: "center",
    },
    myBtn: {
        backgroundColor: "#00a680",

    },
    myContainer: {
        width: "70%"                
    },

});

// Nota como el BOTÓN PRIMERO SALIA GRANDE PERO CENTRADO, entonces le agregamos myContainer,
// pero entonces salio hacia la izquierda, ==> entonces agregamos styles a toda la <View> que
// contiene las propiedades del boton

