import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";


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
            name="loginUser" // este es el que llamamos desde onPress (GuestUser)
            component={Login}
            options={{title:"Iniciar Sesión"}}
            />
      </Stack.Navigator>
    )
}