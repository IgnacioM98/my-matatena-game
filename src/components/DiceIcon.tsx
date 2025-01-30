import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

type Props = {
  num: number;
};
const DiceIcon = ({ num }: Props) => {
  const [source, setSource] = useState();
  useEffect(() => {
    if (num) {
      let src;
      switch (num) {
        case 1:
          src = require("../../assets/dice1.png");
          break;
        case 2:
          src = require("../../assets/dice2.png");
          break;
        case 3:
          src = require("../../assets/dice3.png");
          break;
        case 4:
          src = require("../../assets/dice4.png");
          break;
        case 5:
          src = require("../../assets/dice5.png");
          break;
        case 6:
          src = require("../../assets/dice6.png");
          break;
      }
      setSource(src);
    }
  }, [num]);

  if (!source) return null;

  return (
    <View style={sxDiceBg}>
      <Image
        source={source}
        style={{ height: 65, width: 65 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default DiceIcon;

const { sxDiceBg } = StyleSheet.create({
  sxDiceBg: {
    backgroundColor: "#fff",
    height: 64,
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 5,
  },
});
