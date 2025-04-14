import { ThemedView } from "./Default/ThemedView";
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface PostProps {
    imageUrl: string;
    postId: string;
  }

export const Post = ({ imageUrl, postId }: PostProps) => {
    const router = useRouter();

    return (
      <ThemedView style={styles.Post}>
        <TouchableOpacity onPress={() => router.push(`/post/${postId}`)}>
        <Image 
          style={styles.PostImage} 
          source={{ uri: imageUrl }}
        />
        </TouchableOpacity>
      </ThemedView>
    );
  };

  const styles = StyleSheet.create({
    Post: {
        elevation: 1,
        zIndex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: 'red',
        width: 180, // Fixed width of 150
        aspectRatio: 9/16, // Makes height match width dynamically
      },
      PostImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain' // This will maintain aspect ratio within the fixed container
      }
  });