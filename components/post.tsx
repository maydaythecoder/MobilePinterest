import { ThemedView } from "./Default/ThemedView";
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from "./Default/ThemedText";
import { Dimensions } from 'react-native';
import { useState } from 'react';

interface PostProps {
    imageUrl: string;
    postId: string;
  }

export const Post = ({ imageUrl, postId }: PostProps) => {
    const router = useRouter();
    const [Ratio, setRatio] = useState(1/2);
    Image.getSize(imageUrl, (width, height) => {
        setRatio(width / height);
    });
    return (
      <ThemedView style={styles.Post}>
        <TouchableOpacity onPress={() => router.push(`/post/${postId}`)}>
        <Image 
          style={[styles.PostImage, { aspectRatio: Ratio }]} 
          source={{ uri: imageUrl }}
        />
        </TouchableOpacity>
        <ThemedText style={styles.PostText}>Post {postId}</ThemedText>
      </ThemedView>
    );
  };

  const styles = StyleSheet.create({
    Post: {
      width: '48%',
      marginBottom: 20, 
      backgroundColor: 'red',
      },
      PostImage: {
        width: '100%',
        borderRadius: 16,
      },
      PostText: {
        fontWeight: 'bold',
        marginBottom: 10,
        paddingBottom: 10,
      }
  });