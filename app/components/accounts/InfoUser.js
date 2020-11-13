/**
 * INFO USER -- INFORMACIÓN DEL USUARIO LOGEADO CORRECTAMENTE
 *  imr = import React from 'react'; 
 *  imrn 
 */


import React from 'react';
import { StyleSheet, View, Text  } from "react-native";
import { Avatar, Accessory } from 'react-native-elements';


export default function InfoUser( props ) {

    const {userInfo} = props;
    console.log(userInfo);

    const { photoURL } = userInfo;
    const { displayName } = userInfo;
    const { email } = userInfo;    

    console.log('El mail es ==> ' + email);


    return(
        <View style={styles.viewUserInfo}  >            
            <Avatar
                rounded
                size="large"
                showEditButton
                containerStyle={styles.useInfoAvatar}
                source={photoURL ? {uri:photoURL} : require("../../../assets/img/avatar-default.jpg") }

                // source={{
                //     uri:
                //     'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                // }}
            >            
            </Avatar>
            <View>
                <Text style={styles.displayName} > { displayName ? displayName : "Anonimo" } </Text>
                <Text> {email ? email : "Social Login"} </Text>
            </View>
        </View>
        

    );
}



// Creando constante de estilos de nuestra screen "OJO StyleSheey.create" 
const styles = StyleSheet.create({
    viewUserInfo: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f2f2f2",
        paddingTop: 30,
        paddingBottom: 30,        
    },
    useInfoAvatar: {
        marginRight : 20,        
    },
    displayName: {
        fontWeight: "bold",
        paddingBottom: 5,
    }, 
    displayMail: {
        fontWeight: "bold",
        paddingBottom: 5,
    }, 
    

});

