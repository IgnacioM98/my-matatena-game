import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { useAppInit } from "./src/hooks/useAppInit";
import { MainStack } from "./src/navigation/Navigator";
import store from "./src/redux/store/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </SafeAreaProvider>
  );
}

function Main() {
  const { appReady } = useAppInit({});

  if (!appReady) return null;

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainStack />
    </NavigationContainer>
  );
}

// const {} = StyleSheet.create({
//   container: {

//   },
// });
