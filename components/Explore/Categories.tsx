import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/Default/ThemedView";
import { ThemedText } from "@/components/Default/ThemedText";
import Search from "@/components/Explore/Search";
import { Image, Dimensions } from "react-native";
import { categories } from "@/constants/Categories";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesContainer}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.categoryButton, index === 0 && styles.activeCategory]}
        >
          <Image
            source={{ uri: `${category.image}?w=200&h=200&fit=crop` }}
            style={styles.categoryImage}
          />
          <ThemedText
            style={[
              styles.categoryText,
              index === 0 && styles.activeCategoryText,
            ]}
          >
            {category.name}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  categoryButton: {
    marginRight: 12,
    alignItems: "center",
    width: 90,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  activeCategory: {
    opacity: 1,
  },
  categoryText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  activeCategoryText: {
    color: "#E60023",
    fontWeight: "600",
  },
});

export default Categories;
