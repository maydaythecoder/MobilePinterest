import React from 'react'
import { ThemedView, ThemedText } from '@/components/Default/index'
import { StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { IconSymbol } from '@/components/ui/IconSymbol'

const Profile = () => {
  const windowWidth = Dimensions.get('window').width
  const imageSize = (windowWidth - 30) / 2

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <IconSymbol name="gear" size={24} color="gray" />
        <IconSymbol name="square.and.arrow.up" size={24} color="gray" />
      </ThemedView>

      <ScrollView>
        <ThemedView style={styles.profileInfo}>
          <Image 
            style={styles.profileImage}
            source={{uri: 'https://via.placeholder.com/100'}}
          />
          <ThemedText style={styles.username}>Username</ThemedText>
          <ThemedText style={styles.handle}>@username</ThemedText>
          <ThemedText style={styles.followers}>0 followers • 0 following</ThemedText>
        </ThemedView>

        <ThemedView style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>Share</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.editButton]}>
            <ThemedText style={styles.buttonText}>Edit profile</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.tabs}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <ThemedText style={styles.tabText}>Created</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <ThemedText style={styles.tabText}>Saved</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.gallery}>
          <Image 
            style={[styles.galleryImage, { width: imageSize, height: imageSize }]}
            source={{uri: 'https://via.placeholder.com/200'}}
          />
          <Image 
            style={[styles.galleryImage, { width: imageSize, height: imageSize }]}
            source={{uri: 'https://via.placeholder.com/200'}}
          />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  username: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  handle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  followers: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e9e9e9',
  },
  editButton: {
    backgroundColor: '#111',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 10,
  },
  galleryImage: {
    borderRadius: 16,
  },
})

export default Profile