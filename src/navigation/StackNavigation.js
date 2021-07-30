import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen1/HomeScreen";
import HomeScreen2 from "../screen2/HomeScreen2";
import HomeScreen3 from "../screen3/HomeScreen3";
import DetailsScreen from "../screen1/DetailsScreen";

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Back" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const BatmanStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen2} />
      <Stack.Screen name="Back" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
const SpydermanStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen3} />
      <Stack.Screen name="Back" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, BatmanStackNavigator,SpydermanStackNavigator };
