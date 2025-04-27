import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    // Your config will be automatically picked up from google-services.json and GoogleService-Info.plist
  });
}

export { auth };
