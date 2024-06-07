import { useCallback } from 'react';
import { db, auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [ user ] = useAuthState(auth);

  const signInWithGoogle = useCallback(async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  });

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="App">
      {user ? (
        <>
          <h1>Hello, {user?.displayName}</h1>
          { JSON.stringify(user) }
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}

export default App;
