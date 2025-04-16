import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/Default/ThemedView";
import { ThemedText } from "@/components/Default/ThemedText";
import Search from "@/components/Explore/Search";
import { Image, Dimensions } from "react-native";
import Trending from "@/components/Explore/Trending";
import Categories from "@/components/Explore/Categories";
export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.Container}>
      <Search />
      <Categories />
      <Trending />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
});
