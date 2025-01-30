import {
  PaytoneOne_400Regular,
  useFonts,
} from "@expo-google-fonts/paytone-one";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export interface Props {}

export const useAppInit = ({}: Props) => {
  const [fontLoaded] = useFonts({
    PaytoneOne_400Regular,
  });

  useEffect(() => {
    const hideSplash = async () => await SplashScreen.hideAsync();
    if (fontLoaded) hideSplash();
  }, [fontLoaded]);

  return { appReady: fontLoaded };
};
