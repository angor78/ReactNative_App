import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BatmanStackNavigator } from "./StackNavigation";
import { SpydermanStackNavigator } from "./StackNavigation";
import TabNavigator from "./TabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StarGate" component={TabNavigator} />
      <Drawer.Screen name="Batman" component={BatmanStackNavigator} />
      <Drawer.Screen name="SpyderMan" component={SpydermanStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
