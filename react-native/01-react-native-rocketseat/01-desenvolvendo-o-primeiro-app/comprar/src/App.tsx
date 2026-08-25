import { SafeAreaProvider } from "react-native-safe-area-context";

import { Home } from "./app/Home";

export function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}
