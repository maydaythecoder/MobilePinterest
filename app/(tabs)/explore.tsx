import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Default/ThemedView';
import Search from '@/components/Search';
export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.Container}>
      <Search />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    paddingTop: 6,
  },
});
