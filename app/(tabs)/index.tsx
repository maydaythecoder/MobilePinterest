import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/Default/ThemedText';
import { ThemedView } from '@/components/Default/ThemedView';
import GlobalStyles from '@/app/GlobalStyles';
import { Feed } from '@/components/Feed';
export default function HomeScreen() {

  return (
    <ThemedView style={styles.Container}>
      <ThemedText type="title" style={GlobalStyles().Title}>Home</ThemedText>
      <Feed />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
});
