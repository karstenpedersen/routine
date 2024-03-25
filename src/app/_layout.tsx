import store from "@/stores/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1, flexGrow: 1 }}>
        <BottomSheetModalProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen
          name="(modals)/create-routine"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        /> */}
            <Stack.Screen name="routine" options={{ headerShown: false }} />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
