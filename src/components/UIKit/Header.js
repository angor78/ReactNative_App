//import
import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

//body
const Header = ({ title }) => {
  const { viewStyle, textStyle } = styles;
  return (
    <SafeAreaView style={viewStyle}>
      
      <Text style={textStyle}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    alignItems: "flex-end",
  },
  textStyle: {
    color: "indigo",
    fontSize: 25,
    margin: 35,
    textTransform: "uppercase",
    letterSpacing: 4,
  },
});

//export
export { Header };
