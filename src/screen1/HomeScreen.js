import React, { Component } from "react";
import { View } from "react-native";
import { Header, Layout, ImageCard, SearchBar } from "../components/UIKit";
import { STARGATE_DETAILS } from "../routes";

const url = "http://api.tvmaze.com/search/shows?q=stargate";

export default class Main extends Component {
  state = {
    title: "STAR GATE",
    data: [],
    visibleSearchBar: false,
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { title, data, visibleSearchBar } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        {visibleSearchBar ? (
          <SearchBar
            colorRight={"#fff"}
            iconRight="magnify"
            placeholder="Search"
            onChangeText={this.onChangeText}
            value={"movie"}
            onPressRight={() => this.setState({ visibleSearchBar: false })}
            onBlur={() => this.setState({ visibleSearchBar: true })}
          />
        ) : (
          <Header
            title={title}
            colorRight={"white"}
            iconRight="magnify"
            onPressRight={() => this.setState({ visibleSearchBar: true })}
          />
        )}


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
