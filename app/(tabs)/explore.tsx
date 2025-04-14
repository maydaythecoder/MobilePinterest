import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.Container}>
      <ThemedText type="title">Explore</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    gap: 8,
  },
});
