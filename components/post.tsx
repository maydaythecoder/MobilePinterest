import { ThemedView } from "./Default/ThemedView";
import { Image, StyleSheet } from "react-native";

interface PostProps {
    imageUrl: string;
  }

export const Post = ({ imageUrl }: PostProps) => {
    return (
      <ThemedView style={styles.Post}>
        <Image 
          style={styles.PostImage} 
          source={{ uri: imageUrl }}
        />
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
  