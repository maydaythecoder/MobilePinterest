module.exports = {
  expo: {
    name: "pinterest",
    slug: "pinterest",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    scheme: "pinterest",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.yourcompany.pinterest",
      googleServicesFile: "./GoogleService-Info.plist"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.yourcompany.pinterest",
      googleServicesFile: "./google-services.json"
    },
    plugins: [
      "@react-native-google-signin/google-signin",
      "@react-native-firebase/app"
    ],
    extra: {
      eas: {
        projectId: "your-project-id"
      }
    },
    experiments: {
      newArchEnabled: true
    }
  }
}; 