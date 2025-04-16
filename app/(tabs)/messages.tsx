import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemedView, ThemedText } from '@/components/Default/index'
const messages = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Messages</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
})

export default messages