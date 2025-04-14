import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.Container}>
      <ThemedText type="title" style={styles.Title}>Explore</ThemedText>
      <ThemedView style={styles.SearchBar}>
        <ThemedText type="title" style={styles.SearchBarText}>Search</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    gap: 8,
    padding: 16,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
    padding: 56,
  },
  SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 16,
    width: '100%',
    height: 30,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  SearchBarText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'gray',
    zIndex: 10,
  },
});
