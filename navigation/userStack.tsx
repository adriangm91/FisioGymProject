import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import BeginnerScreen from "../screens/BeginnerScreen";

const Stack = createStackNavigator();

export default function UserStack(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Beginner" component={BeginnerScreen}/>
        {/* Las pantallas a las que el usuario puede entrar */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};