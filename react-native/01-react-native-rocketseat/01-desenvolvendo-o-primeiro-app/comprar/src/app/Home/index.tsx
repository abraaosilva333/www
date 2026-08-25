import {
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = Array.from({ length: 100 }).map((_, index) => index.toString());

export function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("@/assets/logo.png")}
        ></Image>
        <View style={styles.form}>
          <Input placeholder="O que você precisa comprar?" />
          <Button title="Adicionar" />
        </View>
        <View style={styles.content}>
          <View style={styles.header}>
            {FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive />
            ))}

            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Limpar</Text>
            </TouchableOpacity>
          </View>

          {/* <ScrollView>
            {ITEMS.map((value) => (
              <Item
                key={value}
                data={{ status: FilterStatus.DONE, description: "Café" }}
                onStatus={() => console.log("mudar status")}
                onRemove={() => console.log("remover")}
              />
            ))}
          </ScrollView> */}

          <FlatList
            data={ITEMS}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Item
                data={{ status: FilterStatus.DONE, description: item }}
                onStatus={() => console.log("mudar status")}
                onRemove={() => console.log("remover")}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
