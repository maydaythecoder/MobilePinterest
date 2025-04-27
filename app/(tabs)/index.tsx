import { Button, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Default/ThemedView';
import { Feed } from '@/components/Feed';

const HomeScreen = ( { handleLogout }: { handleLogout: () => void } ) => {

  return (
    <ThemedView style={styles.Container}>
      <Feed />
      <Button title="Sign Out" onPress={handleLogout} />
    </ThemedView>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 60,
  },
});
