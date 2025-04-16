import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/Default/ThemedView";
import { ThemedText } from "@/components/Default/ThemedText";
import Search from "@/components/Explore/Search";
import { Image, Dimensions } from "react-native";
import { trendingPins } from "@/constants/Trending";

const Trending = () => {
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = (windowWidth - 45) / 2;

  return (
    <ScrollView style={styles.trendingContainer}>
      <ThemedText style={styles.sectionTitle}>Popular on Pinterest</ThemedText>
      <ThemedView style={styles.trendingGrid}>
        {trendingPins.map((pin, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.trendingItem, { width: itemWidth }]}
          >
            <Image
              style={[
                styles.trendingImage,
                {
                  width: itemWidth,
                  height: index % 2 === 0 ? itemWidth * 1.8 : itemWidth * 1.4,
                },
              ]}
              source={{ uri: pin.image }}
            />
            <ThemedText style={styles.trendingText}>{pin.title}</ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  trendingContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: -600,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
    marginHorizontal: 15,
    color: "#111",
  },
  trendingGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  trendingItem: {
    marginBottom: 20,
  },
  trendingImage: {
    borderRadius: 20,
    marginBottom: 8,
  },
  trendingText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111",
    paddingHorizontal: 4,
  },
});

export default Trending;
