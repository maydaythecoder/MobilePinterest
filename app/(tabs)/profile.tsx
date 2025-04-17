import React, { useState } from "react";
import { ThemedView, ThemedText } from "@/components/Default/index";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { profileData } from "@/constants/ProfileData";


const Profile = () => {
  const windowWidth = Dimensions.get("window").width;
  const imageSize = (windowWidth - 30) / 2;
  const [activeTab, setActiveTab] = useState("created");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <IconSymbol name="gear" size={24} color="gray" />
        <IconSymbol name="square.and.arrow.up" size={24} color="gray" />
      </ThemedView>

      <ScrollView style={{ paddingTop: 10, marginTop: -25 }}>
        <Image
          style={styles.profileImage}
          source={{ uri: profileData.profileImage }}
        />
        
        <ThemedView style={styles.userInfoContainer}>
          <ThemedText style={styles.username} numberOfLines={1} adjustsFontSizeToFit>{profileData.username}</ThemedText>
          <ThemedText style={styles.handle}>{profileData.handle}</ThemedText>
          <ThemedText style={styles.followers}>
            {profileData.stats.followers} followers • {profileData.stats.following} following
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.buttons}>
          {profileData.buttons.map((button, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.button,
                button.type === 'edit' && styles.editButton
              ]}
            >
              <ThemedText style={[
                styles.buttonText,
                button.type === 'edit' && { color: 'white' }
              ]}>{button.text}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>

        <ThemedView style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === "created" && styles.activeTab]}
            onPress={() => setActiveTab("created")}
          >
            <ThemedText style={styles.tabText}>Created</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === "saved" && styles.activeTab]}
            onPress={() => setActiveTab("saved")}
          >
            <ThemedText style={styles.tabText}>Saved</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.gallery}>
          {activeTab === "created" ? (
            profileData.gallery.map((image, index) => (
              <Image
                key={index}
                style={[
                  styles.galleryImage,
                  { width: imageSize, height: imageSize },
                ]}
                source={{ uri: image }}
              />
            ))
          ) : (
            profileData.gallery.map((image, index) => (
              <Image
                key={index}
                style={[
                  styles.galleryImage,
                  { width: imageSize, height: imageSize },
                ]}
                source={{ uri: image }}
              />
            ))
          )}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    backgroundColor: "#e9e9e9",
    overflow: "hidden",
    marginTop: -10,
  },
  userInfoContainer: {
    alignItems: "center",
    width: "100%",
    padding: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  handle: {
    fontSize: 12,
    color: "gray",
    marginBottom: 4,
  },
  followers: {
    fontSize: 12,
    color: "gray",
    marginBottom: 12,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 5,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e9e9e9",
  },
  editButton: {
    backgroundColor: "#111",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingHorizontal: 10,
  },
  galleryImage: {
    borderRadius: 16,
  },
});

export default Profile;
