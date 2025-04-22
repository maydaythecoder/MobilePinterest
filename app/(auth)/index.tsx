import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { SignIn } from '@/components/SignIn'
import { SignUp } from '@/components/SignUp'

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  offlineAccess: true,
})

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [user, setUser] = useState<any>(null)

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.form}>
        {isSignIn ? (
          <SignIn setUser={setUser} />
        ) : (
          <SignUp setUser={setUser} />
        )}

        <TouchableOpacity 
          style={styles.switchButton}
          onPress={() => setIsSignIn(!isSignIn)}
        >
          <Text style={styles.switchText}>
            {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  switchButton: {
    marginTop: 15,
  },
  switchText: {
    color: '#007bff',
    textAlign: 'center',
  }
})

export default Auth