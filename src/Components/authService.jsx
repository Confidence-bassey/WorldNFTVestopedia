import { auth } from './firebase';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email, password) => {
    // const auth = getAuth();
  try {
    
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};


export const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };


export const logout = async () => {
    // const auth = getAuth();
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
