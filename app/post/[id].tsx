import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Default/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'react-native';
import { posts } from '@/constants/Posts';
import { ThemedText } from '@/components/Default/ThemedText';
import { useEffect } from 'react';
import { useState } from 'react';
import { Feed } from '@/components/Feed';

export default function PostDetail() {
  const { id } = useLocalSearchParams();
  const postId = parseInt(id as string);
  const post = posts.find(post => post.postId === postId);
  const imageUrl = post?.imageUrl;
  const [Ratio, setRatio] = useState(1/2);
  useEffect(() => {
      Image.getSize(imageUrl as string, (width, height) => {
          setRatio(width / height);
      });
  }, [imageUrl]);
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={[styles.imageContainer, { aspectRatio: Ratio }]}>
          <Image source={{ uri: imageUrl as string }} style={[styles.image, { aspectRatio: Ratio }]} resizeMode="contain" />
        </ThemedView>
        <ThemedView style={styles.SecondaryFeedContainer}>
          <ThemedText style={styles.title}>Post {id}</ThemedText>
          <Feed />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: '100%',
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 5,
  },
  SecondaryFeedContainer: {
    width: '100%',
    alignItems: 'flex-start',
  }
}); 