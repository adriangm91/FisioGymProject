import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import BeginnerScreen from "../screens/BeginnerScreen";
import MyWorkOutScreen from "../screens/MyWorkOutScreen";
import FitGameScreen from "../screens/FitGameScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FitGameStack = ()=>{

  return(
    <Stack.Navigator>
       <Stack.Screen name="Fit Game" component={FitGameScreen} />
      <Stack.Screen name="Beginner" component={BeginnerScreen} />
    </Stack.Navigator>
  );
}

export default function UserStack() {
  return (
    <NavigationContainer>      
      <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeScreen} />
        {/* 
        <Stack.Screen name="Beginner" component={BeginnerScreen} />
        Las pantallas a las que el usuario puede entrar */}
        <Tab.Screen name="My Workout" component={MyWorkOutScreen} />
        <Tab.Screen name="Fit Game2" component={FitGameStack} options={{headerShown: false}} />
      </Tab.Navigator>
      


    </NavigationContainer>
  );
};