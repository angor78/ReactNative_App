//import
import React from "react";
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { width } from "../../../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//body
const Header = ({
  title,
  colorLeft,
  colorRight,
  iconLeft,
  iconRight,
  onPressLeft,
  onPressRight,
  color,
}) => {
  const { container, textStyle, iconLeftStyle, iconRightStyle } = styles;
  return (
    <SafeAreaView style={container}>
      {iconLeft && (
        <TouchableOpacity onPress={onPressLeft}>
          <MaterialCommunityIcons
            name={iconLeft}
            style={[iconLeftStyle, (color = { colorLeft })]}
          />
        </TouchableOpacity>
      )}
      <Text style={textStyle}>{title}</Text>
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons
            name={iconRight}
            style={[iconRightStyle, {color: colorRight} ]}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
    position: "relative",
    paddingHorizontal: 20,
    backgroundColor: "lightgrey",
  },
  textStyle: {
    color: "black",
    fontSize: 25,
    width: width - 75,
    textTransform: "uppercase",
    letterSpacing: 4,
    height: 90,
    paddingTop: 27,
  },

  iconRightStyle: {
    fontSize:35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius:20,
    height:40,
    width:40,
    marginTop:25,
    paddingTop:2,
    paddingLeft:2
  },
});

//export
export { Header };
