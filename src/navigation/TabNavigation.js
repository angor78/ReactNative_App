import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  MainStackNavigator,
  BatmanStackNavigator,
  SpydermanStackNavigator,
} from "./StackNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "StarGate") {
            iconName = focused ? "ios-videocam" : "ios-play";
          } else if (route.name === "Batman") {
            iconName = focused ? "ios-videocam" : "ios-play";
          } else if (route.name === "Spyderman") {
            iconName = focused ? "ios-videocam" : "ios-play";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "indigo",
        inactiveTintColor: "gray",
        activeBackgroundColor: "none",
      }}
    >
      <Tab.Screen name="StarGate" component={MainStackNavigator} />
      <Tab.Screen name="Batman" component={BatmanStackNavigator} />
      <Tab.Screen name="Spyderman" component={SpydermanStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
