// UserLogged.js (Usario Logeado) viene de  <-- Accoun.js (donde revisa en fireBase el user )
// si el usuario este no esta logeado, en vez de venir acá lo manda a UserGuest.js

// #1 como ya registramos usuario en FireBase, ahora vamos a deslogear el usuario
// OJO: Digamos el BUTTON lo podemos importar de react-native, pero acá lo importamos de 
// react-native-elements porque tiene mas propiedades


import React, {useRef, useState, useEffect } from "react";
import {StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';
import * as firebase from "firebase";
import Toast from "react-native-easy-toast";

import Loading from "../../components/Loading";
import InfoUser from "../../components/accounts/InfoUser";

export default function UserLogged() {

    const refToast = useRef();
    const [loading, setLoading] = useState(false); // para controlar Loading.js
    const [loadingText, setLoadingText] = useState(""); // para controlar Loading.js
    const [userInfo, setUserInfo] = useState({}); // datos user recuperados useEffect

    useEffect(() => {

        (async () => {
            const user = await firebase.auth().currentUser;
            setUserInfo(user);
        })()
        
    }, [])

    return(
        <View style={styles.formContainer} >
            {/* { userInfo && <InfoUser userInfo={userInfo} /> } //Para renderizar si hay datos */}
            <InfoUser userInfo={userInfo} />
            <Text>AccountOptions...</Text>
            <Button 
            title="Cerrar Sesión"
            buttonStyle={styles.myCloseSesion}
            titleStyle={styles.myCloseSesionStyle}
            onPress={() => firebase.auth().signOut()} // Cerrar Sesisión            
            />
            <Toast ref={refToast} position="center" opacity={0.9} />
            <Loading isVisible={loading} text={loadingText} />
        </View>
        
    );
}


// Creando constante de estilos de nuestra screen "OJO StyleSheey.create" 
const styles = StyleSheet.create({   

    formContainer: {
        minHeight: "100%",
        backgroundColor: "#f2f2f2",        
    },    
    myCloseSesion: {
        marginTop: 20,
        borderRadius: 0,
        backgroundColor: "#fff", 
        borderTopWidth: 1,
        borderTopColor: "#e3e3e3",  
        paddingTop: 10,
        paddingBottom: 10,

    },    
    myCloseSesionStyle: {
        color: "#00a680",
    },

});
