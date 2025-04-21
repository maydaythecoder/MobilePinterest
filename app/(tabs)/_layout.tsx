import { Tabs } from "expo-router";
import React, { useState, useEffect } from "react";
import { Platform, StyleSheet } from "react-native";

import { HapticTab } from "@/components/Default/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { auth } from "@/Firebase";
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="magnifyingglass" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="message.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
