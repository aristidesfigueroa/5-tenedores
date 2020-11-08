import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TopRestaurants from "../screens/TopRestaurants";


const Stack = createStackNavigator();

export default function TopRestaurantsStack() {

    return(
        <Stack.Navigator>
        <Stack.Screen 
        name="top-5" 
        component={TopRestaurants}
        options={{title:"Top 5"}}
         />
      </Stack.Navigator>
    )
}