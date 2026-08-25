import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("@/assets/logo.png")}
        ></Image>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>
    </SafeAreaView>
  );
}
