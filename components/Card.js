import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const Card = ({ data }) => {
  console.log(data.name);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftSection}>
        <Text>{data.name || "null"}</Text>
      </View>

      <View style={styles.rightSection}>
        <Text>{data.coatOfArms || "null"}</Text>

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightSection: {
    width: "72%",
    padding: SIZES.font,
    backgroundColor: COLORS.white,
    ...SHADOWS.dark,
  },
  leftSection: {
    width: "25%",
    padding: SIZES.font,
    backgroundColor: COLORS.white,
    ...SHADOWS.dark,
  },
});

export default Card;
