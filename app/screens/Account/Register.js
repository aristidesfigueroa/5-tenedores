import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Divider } from 'react-native-elements';


export default function Register() {    

    return (
        <View>
            <Text>Register..</Text>        
        </View>
        

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
