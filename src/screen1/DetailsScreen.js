import React from "react";
import { width } from "../../constants";
import { Text, ScrollView, StyleSheet, Image } from "react-native";


const DetailsScreen = (data) => {
  const { h1, cover, text,container } = styles;
  const { name, image, summary } = data.route.params;
  const img = image.original;
  return (
    <ScrollView style={container}>
      <Image style={cover} source={{ uri: img }} />
      <Text style={h1}>{name}</Text>
      <Text style={text}>{summary.replace(/<[^>]+>/g, "")}</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 150,
  },
  h1: {
    fontSize: 25,
    fontWeight: "100",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#444444",
    alignSelf: "center",
    textAlign: "center",
    margin: 20,
  },
  text: {
    textAlign: "center",
    paddingLeft:25,
    paddingRight:25,
    fontSize:16,
    fontWeight:'100',
    color:'#444444',
    marginBottom:25,
  },
  cover: {
    width: width / 1.17,
    height: width * 1.3,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 25,
  
  },
});
export default DetailsScreen;