import React from 'react'
import { ThemedView, ThemedText } from '@/components/Default/index'
import { StyleSheet } from 'react-native'

const create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Create</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
})

export default create