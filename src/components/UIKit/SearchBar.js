//import
import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { width } from "../../../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//body
const SearchBar = ({
  colorRight,
  iconRight,
  onPressRight,
  color,
  onChangeText,
  placeholder,
  value,
  onBlur,
}) => {
  const { container, inputStyle, sub, iconRightStyle, searchStyle } = styles;
  return (
    <View style={container}>
      <View style={sub}>
        <TextInput
          style={inputStyle}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
        />

        <TouchableOpacity onPress={onPressRight}>
          <View style={searchStyle}>
            <MaterialCommunityIcons
              name={iconRight}
              style={[iconRightStyle, {color: colorRight} ]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    elevation: 2,
    position: "relative",
    paddingHorizontal: 20,
    backgroundColor: "lightgrey",
  },
  sub: {
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom:25,
    alignItems: "center",
    flexDirection: "row",
    width: width - 35,
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 20,
  },
  inputStyle: {
    fontSize: 18,
    height: 23,
    width: width - 90,
    marginLeft: 15,
    backgroundColor: "#fff",
    height: 40,
    //width:140,
    borderRadius:20,
  },
  searchStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius:20,
    height:40,
    width:40
  },
  iconRightStyle: {
    fontSize: 35,
    marginTop: 2,
    
  },
});

//export
export { SearchBar };
