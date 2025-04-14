import { StyleSheet, Image, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface PostProps {
  imageUrl: string;
}

const Post = ({ imageUrl }: PostProps) => {
  return (
    <ThemedView style={styles.Post}>
      <Image 
        style={styles.PostImage} 
        source={{ uri: imageUrl }}
      />
    </ThemedView>
  );
};

export default function HomeScreen() {
  const posts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1742590794310-04fc4d2025f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1739989934246-c330e36658b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
    }
    ,
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1741462166411-b94730c55171?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <ThemedView style={styles.FeedContainer}>
      <ThemedText type="title" style={styles.Title}>Home</ThemedText>
      <ScrollView contentContainerStyle={styles.Feed}>
        <ThemedView style={styles.PostGrid}>
          {posts.map(post => (
            <Post key={post.id} imageUrl={post.imageUrl} />
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  FeedContainer: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  Feed: {
    paddingTop: 60, // To account for sticky header
    paddingHorizontal: 8,
  },
  PostGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    gap: 8,
    paddingTop: 10,
  },
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
