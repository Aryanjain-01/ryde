import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync().catch(() => {
  // Ignore "already hidden" errors during fast refresh.
});

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Load async app resources here (fonts, API bootstrap, etc.)
      } finally {
        setIsAppReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);

  if (!isAppReady) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
