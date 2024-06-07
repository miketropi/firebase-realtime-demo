import { createContext, useContext, useCallback } from "react";
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [ user ] = useAuthState(auth);
  const onSignInWithGoogle = useCallback(async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  }, []);

  const onHandleLogout = () => {
    auth.signOut();
  };

  const value = {
    onSignInWithGoogle,
    onHandleLogout,
    user
  }

  return <AppContext.Provider value={ value }>
    { children }
  </AppContext.Provider>
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppContextProvider, useAppContext }