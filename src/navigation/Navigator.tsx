import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { colors } from "../theme/colors";
import { NavigationScreens as screens } from "../constants/screenNames";
import Room from "../screens/room/Room";

interface RootStackParamList {
  [key: string]: undefined; // Screen names
}

export type StackComponentProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: colors.FONDO },
        headerTitle: "",
        headerShown: false,
        headerBackTitleVisible: false,
        animation: "fade",
        animationTypeForReplace: "push",
      }}
    >
      <Stack.Screen name={screens.Room} component={Room} />
    </Stack.Navigator>
  );
}
