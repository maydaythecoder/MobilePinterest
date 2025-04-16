import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Default/ThemedView';
import { Feed } from '@/components/Feed';

export default function HomeScreen() {

  return (
    <ThemedView style={styles.Container}>
      <Feed />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 60,
  },
});
