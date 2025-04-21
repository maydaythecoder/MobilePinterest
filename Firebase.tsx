import { initializeApp } from "firebase/app";
import { initializeAuth, type Persistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: {
    type: "LOCAL",
    async getItem(key: string): Promise<string | null> {
      const value = await AsyncStorage.getItem(key);
      return value;
    },
    async setItem(key: string, value: string): Promise<void> {
      await AsyncStorage.setItem(key, value);
    },
    async removeItem(key: string): Promise<void> {
      await AsyncStorage.removeItem(key);
    }
  } as Persistence
});
