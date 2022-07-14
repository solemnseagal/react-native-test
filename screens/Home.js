import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";

import { Card, HomeHeader, FocusedStatusBar } from "../components";
import { FONTS, COLORS, NFTData, SIZES } from "../constants";
import { client } from "../data/apiData";
import { getHouses } from "../data/getHouses";

const Home = () => {
  const [data, setData] = useState({});
  const [searchData, setSearchData] = useState(data);

  useEffect(() => {
    client

      .query({
        query: getHouses,
      })
      .then((res) => {
        console.log(res.data.houses);
        setData(res.data.houses);
        setSearchData(res.data.houses);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setData(data);
    }

    const filteredData = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setData(data);
    } else {
      setData(filteredData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <HomeHeader onSearch={handleSearch} />
      <View style={{ flex: 1 }}>
        <ScrollView style={{ zIndex: 0 }}>
          <Text style={styles.title}>May</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            style={styles.segment}
          />

          <Text style={styles.title}>June</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id + 10}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{
              height: 8,
              backgroundColor: COLORS.primary,
            }}
          />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginTop: SIZES.base,
    height: 50,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary,
  },

  segment: {
    // height: 300,
  },
});

export default Home;
