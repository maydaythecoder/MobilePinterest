import React from "react";
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

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <IconSymbol name="gear" size={24} color="gray" />
        <IconSymbol name="square.and.arrow.up" size={24} color="gray" />
      </ThemedView>

      <ScrollView>
        <ThemedView style={styles.profileInfo}>
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
              <ThemedText style={styles.buttonText}>{button.text}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>

        <ThemedView style={styles.tabs}>
          {profileData.tabs.map((tab, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.tab, tab.active && styles.activeTab]}
            >
              <ThemedText style={styles.tabText}>{tab.text}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>

        <ThemedView style={styles.gallery}>
          {profileData.gallery.map((image, index) => (
            <Image
              key={index}
              style={[
                styles.galleryImage,
                { width: imageSize, height: imageSize },
              ]}
              source={{ uri: image }}
            />
          ))}
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
    justifyContent: "flex-end",
    gap: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: "#e9e9e9",
    overflow: "hidden",
  },
  userInfoContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    padding: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  handle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  followers: {
    fontSize: 14,
    color: "gray",
    marginBottom: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
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
