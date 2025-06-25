import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hit2b.iFamily',
  appName: 'iFamily',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ['phone', 'google.com', 'apple.com']
    },
    PhotoViewer: {
      iosImageLocation: 'Library/Images',
      androidImageLocation: 'Files/Images',
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '1008524938992-tesl4nq07h550n063b9p28kenopd0ule.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  }
};

export default config;
