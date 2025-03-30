import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./screens/dashboard/index";
import Home from './app/(tabs)/index'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="index" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default App;
