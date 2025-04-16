import React from "react";
import { ThemedView, ThemedText } from "@/components/Default/index";
import { StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";

const create = () => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <IconSymbol name="xmark" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <ThemedText style={styles.saveText}>Save</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.uploadContainer}>
          <IconSymbol name="photo" size={32} color="gray" />
          <ThemedText style={styles.uploadText}>Upload a photo</ThemedText>
          <ThemedText style={styles.recommendationText}>
            We recommend using high-quality .jpg files less than 20MB
          </ThemedText>
        </TouchableOpacity>

        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.label}>Title</ThemedText>
          <ThemedView style={styles.inputBox}>
            <ThemedText style={styles.placeholder}>Add your title</ThemedText>
          </ThemedView>

          <ThemedText style={styles.label}>Description</ThemedText>
          <ThemedView style={styles.inputBox}>
            <ThemedText style={styles.placeholder}>
              Tell everyone what your Pin is about
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  closeButton: {
    padding: 8,
  },
  saveButton: {
    backgroundColor: "#E60023",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  uploadContainer: {
    height: 300,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  recommendationText: {
    fontSize: 12,
    color: "gray",
    marginTop: 8,
  },
  inputContainer: {
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 12,
  },
  placeholder: {
    color: "gray",
  },
});

export default create;
