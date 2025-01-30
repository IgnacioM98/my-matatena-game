import { useHeaderHeight } from "@react-navigation/elements";
import React, { FC, ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackArrow from "../icons/BackArrow";
import { ScreenType } from "../models/screen-types";
import { colors } from "../theme/colors";

type Props = {
  children: ReactNode;
  showVerticalScrollIndicator?: boolean;
  style?: StyleProp<ViewStyle>;
};
type Main = {
  screenType?: ScreenType;
  goBack?: VoidFunction;
};

export const ScreenLayout: FC<Props & Main> = (props) => {
  const { screenType = ScreenType.view, goBack } = props;
  const headerHeight = useHeaderHeight();
  const { top } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({
        android: top,
        ios: headerHeight,
      })}
      style={fsxContainer()}
      enabled
    >
      {goBack && (
        <View
          style={{
            paddingTop: top + 15,
            paddingLeft: 25,
            zIndex: 1,
          }}
        >
          <TouchableOpacity style={sxBackBtn} onPress={goBack}>
            <BackArrow fill={"#fff"} height={18} style={{ marginRight: 2 }} />
          </TouchableOpacity>
        </View>
      )}
      {screenType === ScreenType.view ? (
        <LayoutView {...props} />
      ) : (
        <LayoutScroll {...props} />
      )}
    </KeyboardAvoidingView>
  );
};

const LayoutView: FC<Props> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        marginBottom: undefined,
      }}
    >
      {children}
    </View>
  );
};

const LayoutScroll: FC<Props> = ({
  children,
  showVerticalScrollIndicator = false,
}) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="never"
      showsVerticalScrollIndicator={showVerticalScrollIndicator}
      overScrollMode="auto"
      nestedScrollEnabled
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      {children}
    </ScrollView>
  );
};

const { sxBackBtn } = StyleSheet.create({
  sxBackBtn: {
    backgroundColor: "#000",
    borderRadius: 5,
    alignItems: "center",
    width: 30,
    paddingVertical: 8,
  },
});

const { fsxContainer } = {
  fsxContainer: (paddingTop?: number): ViewStyle => ({
    flex: 1,
    paddingTop,
  }),
};
