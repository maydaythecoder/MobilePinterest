import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Default/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'react-native';
import { posts } from '@/constants/Posts';
import { ThemedText } from '@/components/Default/ThemedText';
export default function PostDetail() {
  const { id } = useLocalSearchParams();
  const postId = parseInt(id as string);
  const post = posts.find(post => post.postId === postId);
  const imageUrl = post?.imageUrl;

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 9/16,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
}); 