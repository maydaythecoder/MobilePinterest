import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/Default/ThemedText';
import { ThemedView } from '@/components/Default/ThemedView';
import { Post } from '@/components/post';
import { posts } from '@/constants/Posts';
import { GlobalStyles } from '@/app/GlobalStyles';
export default function HomeScreen() {

  return (
    <ThemedView style={styles.FeedContainer}>
      <ThemedText type="title" style={GlobalStyles.Title}>Home</ThemedText>
      <ScrollView contentContainerStyle={styles.Feed}>
        <ThemedView style={styles.PostGrid}>
          {posts.map(post => (
            <Post key={post.postId} imageUrl={post.imageUrl} postId={post.postId.toString()} />
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
  Feed: {
    paddingTop: 60,
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
});
