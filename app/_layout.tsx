import { SplashScreen, Stack } from "expo-router";
import "../app/global.css"
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from "@/lib/globalProvider";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf")
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return(
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false, animation: "slide_from_bottom" }} />
    </GlobalProvider>
  );
}
