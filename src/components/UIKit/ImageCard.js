import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { width } from "../../../constants";

const ImageCard = ({ data, onPress }) => {
  const { container, h1, cover } = styles;
  const { image, name } = data;
  const img = image.medium;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View>
          <Image style={cover} source={{ uri: img }} />
        </View>

        <Text style={h1}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2.4,
    margin: 10,
    shadowColor: "black",
  },
  h1: {
    fontSize: 18,
    fontWeight: "100",
    letterSpacing: 1,
    color: "#444444",
    alignSelf: "center",
    textAlign: "center",
    width: width / 2.4,
  },
  cover: {
    width: width / 2.4,
    height: width * 0.63,
    borderRadius: 10,
  },
});
export { ImageCard };
