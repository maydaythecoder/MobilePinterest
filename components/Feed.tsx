import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/Default/ThemedView';
import { Post } from '@/components/post';
import { posts } from '@/constants/Posts';

export const Feed = () => {
    const leftColumnPosts = posts.filter((_, index) => index % 2 === 0);
    const rightColumnPosts = posts.filter((_, index) => index % 2 === 1);
  
    return (
        <ThemedView style={styles.Container}>
            <ScrollView contentContainerStyle={styles.ScrollView}>
            <ThemedView style={styles.MasonryContainer}>
            <ThemedView style={styles.MasonryColumn}>
            {leftColumnPosts.map(post => (
              <Post key={post.postId} imageUrl={post.imageUrl} postId={post.postId.toString()} />
            ))}
          </ThemedView>
          <ThemedView style={styles.MasonryColumn}>
            {rightColumnPosts.map(post => (
              <Post key={post.postId} imageUrl={post.imageUrl} postId={post.postId.toString()} />
            ))}
          </ThemedView>
        </ThemedView>
      </ScrollView> 
    </ThemedView>
    )
}

const styles = StyleSheet.create({
    Container: {
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      paddingBottom: 25,
    },
    ScrollView: {
      flexGrow: 1,
    },
    MasonryContainer: {
      flexDirection: 'row',
      paddingTop: 20,
      paddingHorizontal: 8,
    },
    MasonryColumn: {
      flex: 1,
      gap: 8,
      paddingHorizontal: 4,
    },
  });
  