import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/Default/ThemedView';
import { ThemedText } from '@/components/Default/ThemedText';
import Search from '@/components/Search';
import { Image, Dimensions } from 'react-native';

export default function TabTwoScreen() {
  const windowWidth = Dimensions.get('window').width;
  const itemWidth = (windowWidth - 45) / 2; // Account for padding and gap
  
  const categories = [
    {
      name: "All",
      image: "https://images.unsplash.com/photo-1531685250784-7569952593d2"
    },
    {
      name: "DIY",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b"
    },
    {
      name: "Home",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    },
    {
      name: "Art", 
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b"
    },
    {
      name: "Food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      name: "Travel",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
    }
  ];

  const trendingPins = [
    {
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      title: "Summer Fashion Trends"
    },
    {
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f", 
      title: "Modern Home Decor"
    },
    {
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      title: "Healthy Recipes"
    },
    {
      image: "https://images.unsplash.com/photo-1511649475669-e288648b2339",
      title: "DIY Home Projects"
    },
    {
      image: "https://images.unsplash.com/photo-1526307616774-60d0098f7642",
      title: "Travel Destinations"
    },
    {
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      title: "Art & Design"
    }
  ];

  return (
    <ThemedView style={styles.Container}>
      <ThemedView style={styles.searchContainer}>
        <Search />
      </ThemedView>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.categoryButton,
              index === 0 && styles.activeCategory
            ]}
          >
            <Image 
              source={{ uri: `${category.image}?w=200&h=200&fit=crop` }}
              style={styles.categoryImage}
            />
            <ThemedText style={[
              styles.categoryText,
              index === 0 && styles.activeCategoryText
            ]}>
              {category.name}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <ScrollView style={styles.trendingContainer}>
        <ThemedText style={styles.sectionTitle}>Popular on Pinterest</ThemedText>
        <ThemedView style={styles.trendingGrid}>
          {trendingPins.map((pin, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.trendingItem, { width: itemWidth }]}
            >
              <Image 
                style={[styles.trendingImage, { 
                  width: itemWidth,
                  height: index % 2 === 0 ? itemWidth * 1.8 : itemWidth * 1.4
                }]}
                source={{uri: pin.image}}
              />
              <ThemedText style={styles.trendingText}>{pin.title}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingHorizontal: 10,
  },
  categoriesContainer: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  categoryButton: {
    marginRight: 12,
    alignItems: 'center',
    width: 90,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  activeCategory: {
    opacity: 1,
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  activeCategoryText: {
    color: '#E60023',
    fontWeight: '600',
  },
  trendingContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 15,
    color: '#111',
  },
  trendingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  trendingItem: {
    marginBottom: 20,
  },
  trendingImage: {
    borderRadius: 20,
    marginBottom: 8,
  },
  trendingText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111',
    paddingHorizontal: 4,
  },
});
