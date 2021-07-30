import React, { Component } from "react";
import { View } from "react-native";
import { Header, ImageCard, Layout } from "../components/UIKit";

const url = "https://api.tvmaze.com/search/shows?q=stargate";
export default class HomeScreen extends Component {
  state = {
    title: "STAR GATE",
    data: [],
  };
  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      throw "error";
    }
  };

  render() {
    const { title, data } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <Header title={title} />
        <Layout>
          {data.map((item) => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate("Back", item.show)}
            />
          ))}
        </Layout>
      </View>
    );
  }
}
