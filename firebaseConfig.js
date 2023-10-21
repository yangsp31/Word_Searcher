import { initializeApp } from 'firebase/app';
import {  initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  //your firebase config
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
export const DB = getFirestore(app);
export default app;