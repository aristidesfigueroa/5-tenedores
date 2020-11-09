import React from "react";
import {StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Button } from 'react-native-elements';

export default function UserGuest() {

    return(
        <ScrollView centerContent={true} style={styles.myViewBody}>
          <Image 
              source={require("../../../assets/img/user-guest.jpg")}
              resizeMode="contain"
              style={styles.myImage}
          />
          <Text style={styles.textA} >Consulta tú perfil de 5 Tenedores</Text>
          <Text style={styles.textB}>
              Describe en tú experiencia, los mejores Restaurantes. Describe de una forma
              sencilla tú experiencia y vota cual te ha gustado más.                           
          </Text>
          <View style={styles.myBtnView}>
              <Button
                title="Ver tú perfil"
                buttonStyle={styles.myBtn}
                containerStyle={styles.myContainer}
                onPress={() => console.log('Clik-Ver perfil')}
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

