import { StyleSheet, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.FeedContainer}>
      <ThemedView style={styles.Feed}>
        <ThemedText type="title">Home</ThemedText>
        <ThemedView style={styles.Post}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1742590794310-04fc4d2025f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
        </ThemedView>
        <ThemedView style={styles.Post}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1742590794310-04fc4d2025f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  FeedContainer: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    gap: 8,
    padding: 16,
  },
  Feed: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
  },
  Post: {
    zIndex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'red',
    width: '100%',
    height: 150,
  },
});
