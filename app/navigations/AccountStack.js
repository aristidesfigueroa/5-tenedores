// STACK DE -- MI CUENTA --
//              ↓
//             LOGIN    --> SCREEN REGISTER LOGIN 
//              ↓
//             REGISTER --> SCREEN REGISTER FORM 


import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";


const Stack = createStackNavigator();

export default function AccountStack() {

    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="account" 
            component={Account}
            options={{title:"Mi Cuenta"}}
            />
            <Stack.Screen 
            name="login" // este es el que llamamos desde onPress (UserGuest)
            component={Login}
            options={{title:"Iniciar Sesión"}}
            />
            <Stack.Screen 
            name="register" // este es el que llamamos desde onPress (Register)
            component={Register}
            options={{title:"Resgistro"}}
            />
      </Stack.Navigator>
    )
}