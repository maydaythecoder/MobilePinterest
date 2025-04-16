import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/Default/ThemedView";
import { ThemedText } from "@/components/Default/ThemedText";
import { Image, Dimensions } from "react-native";
import { trendingPins } from "@/constants/Trending";

const Trending = () => {
  const windowWidth = Dimensions.get("window").width;
  const columnWidth = (windowWidth - 45) / 2;

  // Split pins into two columns for masonry layout
  const leftColumnPins = trendingPins.filter((_, i) => i % 2 === 0);
  const rightColumnPins = trendingPins.filter((_, i) => i % 2 === 1);

  return (
    <ScrollView style={styles.trendingContainer}>
      <ThemedText style={styles.sectionTitle}>Popular on Pinterest</ThemedText>
      <ThemedView style={styles.masonryContainer}>
        {/* Left Column */}
        <ThemedView style={[styles.masonryColumn, { width: columnWidth }]}>
          {leftColumnPins.map((pin, index) => (
            <TouchableOpacity key={index} style={styles.trendingItem}>
              <Image
                style={[styles.trendingImage, { width: columnWidth, height: columnWidth * 1.8 }]}
                source={{ uri: pin.image }}
              />
              <ThemedText style={styles.trendingText}>{pin.title}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>

        {/* Right Column */}
        <ThemedView style={[styles.masonryColumn, { width: columnWidth }]}>
          {rightColumnPins.map((pin, index) => (
            <TouchableOpacity key={index} style={styles.trendingItem}>
              <Image
                style={[styles.trendingImage, { width: columnWidth, height: columnWidth * 1.4 }]}
                source={{ uri: pin.image }}
              />
              <ThemedText style={styles.trendingText}>{pin.title}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
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
  masonryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  masonryColumn: {
    flexDirection: "column",
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
