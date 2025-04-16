import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Default/ThemedView';
import Search from '@/components/Search';
import { Image, Dimensions } from 'react-native';

export default function TabTwoScreen() {
  const windowWidth = Dimensions.get('window').width;
  const imageSize = (windowWidth - 30) / 2; // Account for padding and gap

  return (
    <ThemedView style={styles.Container}>
      <Search />
      <ThemedView style={styles.ImageContainer}>
          <Image 
            style={[styles.Image, { width: imageSize, height: imageSize }]}
            source={{uri: "https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
          />
          <Image 
            style={[styles.Image, { width: imageSize, height: imageSize }]}
            source={{uri: "https://images.unsplash.com/photo-1726137569962-456daf4ec02f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"}}
          />
          <Image 
            style={[styles.Image, { width: imageSize, height: imageSize }]}
            source={{uri: "https://images.unsplash.com/photo-1743068417491-95b9e08a7fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"}}
          />
          <Image 
            style={[styles.Image, { width: imageSize, height: imageSize }]}
            source={{uri: "https://images.unsplash.com/photo-1741762764258-8f9348bdf186?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"}}
          />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  ImageContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  Image: {
    borderRadius: 10,
    margin: 0,
  },
});
