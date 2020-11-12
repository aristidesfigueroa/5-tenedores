// UserLogged.js (Usario Logeado) viene de  <-- Accoun.js (donde revisa en fireBase el user )
// si el usuario este no esta logeado, en vez de venir acá lo manda a UserGuest.js

// #1 como ya registramos usuario en FireBase, ahora vamos a deslogear el usuario

import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {

    return(
        <View style={styles.formContainer} >
            <Text>UserLogged...</Text>
            <Button 
            title="Cerrar Sesión"
            onPress={() => firebase.auth().signOut()}
            buttonStyle={styles.myBtn}
            containerStyle={styles.myContainer}
             />
        </View>
    )
}


// Creando constante de estilos de nuestra screen "OJO StyleSheey.create" 
const styles = StyleSheet.create({   
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop:30,
    },     
    myBtn: {
        backgroundColor: "#00a680",
    },   
    myContainer: {
        marginTop: 20,
        width: "95%",                
    },

});
