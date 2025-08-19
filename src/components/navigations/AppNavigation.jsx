import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ReciepieList from '../screens/ReciepieList'
import ReciepieDesc from '../screens/ReciepieDesc'

const stack = createNativeStackNavigator()

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#f7e70bff' }, headerTitleStyle: { fontSize: 25 }, headerTitleAlign: 'center' }}>
                <stack.Screen name="ReciepieList" component={ReciepieList} options={{ title: "Recipies" }} />
                <stack.Screen name="ReciepieDesc" component={ReciepieDesc} options={{ title: "Recipie-Details" }} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation