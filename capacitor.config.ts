import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Test Ionic',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
