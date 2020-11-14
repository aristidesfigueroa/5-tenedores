/**
 * INFO USER -- INFORMACIÓN DEL USUARIO LOGEADO CORRECTAMENTE
 *  imr = import React from 'react'; 
 *  imrn 
 */


import React from 'react';
import { StyleSheet, View, Text  } from "react-native";
import { Avatar, Accessory } from 'react-native-elements';
import * as firebase from "firebase";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


export default function InfoUser( props ) {

    const { userInfo, refToast} = props;
    console.log(userInfo);

    const { photoURL } = userInfo;
    const { displayName } = userInfo;
    const { email } = userInfo;  
    

    // console.log('El mail es ==> ' + email);

    /**
     * 
     * onChangeAvatar() ASINCRONA
     * Presiono Avatar para modificarlo, antes agregamos dependencias, depués de haber habilitado una
     * carpetar /avatar en firebase, en app.json puesto la propiedad "permissions": [CAMERA_ROLL]
     * 
     */

     const onChangeAvatar = async () => {
         const resultPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
         const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;
        //  const resultPermissionExpires = resultPermission.permissions.cameraRoll.expires;
        //  console.log(resultPermission);
        //  console.log("ResultPERMIS ==> " + resultPermission);
        //  console.log("ResultCAMERA ==> " + resultPermissionCamera);
        //  console.log("ResultEXPIRE ==> " + resultPermissionExpires);

        if (resultPermissionCamera === "denied") {            
            refToast.current.show("Es necesario aceptar los permisos de la galería"); 
                    
        }else{
            // Abrimos camará o galería
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4,4],
            });
            console.log(result);
        }
     }


    return(
        <View style={styles.viewUserInfo}  >            
            <Avatar
                rounded
                size="large"
                showEditButton
                onEditPress={onChangeAvatar}
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

