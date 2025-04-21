import { initializeApp } from "firebase/app";
import auth from "@react-native-firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_WEB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_WEB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_WEB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_WEB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_WEB_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_WEB_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Export the auth instance from @react-native-firebase/auth
export { auth };
