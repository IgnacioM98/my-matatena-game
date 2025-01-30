import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ScreenLayout } from "../../layout/ScreenLayout";
import { ScreenType } from "../../models/screen-types";
import { fontStyles } from "../../theme/fonts";
import { StackComponentProps } from "../../navigation/Navigator";
import { useDiceRoll } from "../../hooks/useDiceRoll";
import DiceIcon from "../../components/DiceIcon";
import { colors } from "../../theme/colors";
import { useGame } from "../../hooks/useGame";

const { regular } = fontStyles;

const Room = (props: StackComponentProps) => {
  const { navigation } = props;

  const goBack = () => {
    // navigation.canGoBack() && navigation.goBack();
  };

  const { selected, onChangeSelectable, onSelectColumn } = useGame({});

  const { src, onRollDice, onRollDiceMultiple, isLoading } = useDiceRoll({
    onChangeSelectable,
  });

  return (
    <ScreenLayout screenType={ScreenType.scroll} goBack={goBack}>
      <View style={{ paddingBottom: 10 }}>
        <Text style={sxTitle}>MATATENA</Text>
      </View>
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        <View>
          <Text style={sxSubtitle}>Oponente</Text>
          <View style={sxGameBox}>
            <View style={sxColumn}></View>
            <View style={sxColumn} />
            <View style={sxColumn} />
          </View>
          <View style={sxGameBox}>
            <TouchableOpacity
              style={sxColumn}
              onPress={onSelectColumn}
              disabled={!selected}
            >
              <DiceIcon num={5} />
              <DiceIcon num={2} />
              <DiceIcon num={4} />
            </TouchableOpacity>
            <TouchableOpacity
              style={sxColumn}
              onPress={onSelectColumn}
              disabled={!selected}
            />
            <TouchableOpacity
              style={sxColumn}
              onPress={onSelectColumn}
              disabled={!selected}
            />
          </View>
          <Text style={[sxSubtitle, { alignSelf: "flex-end" }]}>Tú</Text>
        </View>

        <View style={sxBottomContainer}>
          <TouchableOpacity
            style={sxTable}
            onPress={onRollDiceMultiple}
            disabled={isLoading || typeof selected !== "undefined"}
          >
            <Image
              source={require("../../../assets/tablebg2.jpeg")}
              style={{ position: "absolute", width: "100%", height: "100%" }}
              resizeMethod="resize"
              resizeMode="repeat"
            />

            {src && (
              <View style={sxDiceContainer}>
                <Image
                  source={src}
                  style={{ height: "101%", width: "101%" }}
                  resizeMode="contain"
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Room;

const {
  sxTitle,
  sxSubtitle,
  sxTable,
  sxDiceContainer,
  sxBottomContainer,
  sxGameBox,
  sxColumn,
} = StyleSheet.create({
  sxTitle: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    ...regular,
  },
  sxSubtitle: {
    color: "#000",
    fontSize: 15,
    ...regular,
  },
  sxDiceContainer: {
    backgroundColor: "#fff",
    height: 65,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  sxTable: {
    height: 90,
    width: 160,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  sxBottomContainer: {
    flex: 1,
    marginBottom: 30,
    justifyContent: "flex-end",
  },
  sxGameBox: {
    height: 250,
    backgroundColor: "#899499",
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sxColumn: {
    width: 80,
    height: 228,
    alignItems: "center",
    flexDirection: "column-reverse",
    borderColor: colors.FONDO,
    borderWidth: 3,
    borderRadius: 5,
  },
});
