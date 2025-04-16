import React, { useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ThemedView, ThemedText } from "@/components/Default/index";
import { IconSymbol } from "@/components/ui/IconSymbol";

const messages = () => {
  const [activeTab, setActiveTab] = useState("inbox");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Inbox</ThemedText>
        <TouchableOpacity>
          <IconSymbol name="square.and.pencil" size={24} color="gray" />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "inbox" && styles.activeTab]}
          onPress={() => setActiveTab("inbox")}
        >
          <ThemedText
            style={[
              styles.tabText,
              activeTab === "inbox" && styles.activeTabText,
            ]}
          >
            Inbox
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "updates" && styles.activeTab]}
          onPress={() => setActiveTab("updates")}
        >
          <ThemedText
            style={[
              styles.tabText,
              activeTab === "updates" && styles.activeTabText,
            ]}
          >
            Updates
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ScrollView style={styles.messageList}>
        <ThemedView style={styles.emptyState}>
          <IconSymbol name="message.fill" size={48} color="gray" />
          <ThemedText style={styles.emptyTitle}>
            {activeTab === "inbox" ? "No messages yet" : "No updates"}
          </ThemedText>
          <ThemedText style={styles.emptySubtitle}>
            {activeTab === "inbox"
              ? "Share ideas with your friends and get the conversation started"
              : "Check back later for updates about your activity"}
          </ThemedText>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
    justifyContent: "center", // Added to center the tabs
  },
  tab: {
    paddingVertical: 12,
    marginRight: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  tabText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center", // Added to center the text
  },
  activeTabText: {
    color: "#000",
    fontWeight: "500",
  },
  messageList: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingTop: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
});

export default messages;
