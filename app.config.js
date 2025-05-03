module.exports = {
  expo: {
    name: "pinterest",
    slug: "pinterest",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    scheme: "pinterest",
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.yourcompany.pinterest",
      googleServicesFile: "./GoogleService-Info.plist"
    },
    android: {
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