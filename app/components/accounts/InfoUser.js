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
    // console.log(userInfo);

    const { photoURL } = userInfo;
    const { displayName } = userInfo;
    const { email } = userInfo; 
    const { uid } = userInfo;    

    /**
     * 
     * onChangeAvatar() ASINCRONA
     * Presiono Avatar para modificarlo, antes agregamos dependencias, depués de haber habilitado una
     * carpetar /avatar en firebase, en app.json puesto la propiedad "permissions": [CAMERA_ROLL].
     * 
     * Esta función validará los permisos y si son correctos llama a la función upLoadImage() para
     * subir a Firebase la imagen seleccionada
     * 
     */

     const onChangeAvatar = async () => {
         const resultPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
         const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;        
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
            if (result.cancelled) {
                refToast.current.show("Has cancelado la selección de imágenes");                
            }else{
                // LLamamos función para subir a FireBase la imágen, esta devuelve una 
                // promesa para validarla, por eso el .then
                upLoadImage(result.uri).then(() => {
                    refToast.current.show("Avatar Almacenado");
                }).catch(() => {
                    refToast.current.show("Error al subir el Avatar");

                });
            }


            // console.log(result);
        }
     }

     const upLoadImage = async ( uri ) => {
         const response = await fetch(uri);
         const blob = await response.blob();
         console.log(JSON.stringify(blob));
        //  console.log(JSON.stringify(response));
        // El blob es el que se sube a FireBase
        const ref = firebase.storage().ref().child(`avatar/${uid}`);
        return ref.put(blob); // devolvemos una promesa

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

