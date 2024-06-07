import { useAppContext } from "../context/AppContext";

export default function UserAuth() {
  const { user, onSignInWithGoogle, onHandleLogout } = useAppContext();
  
  return <div className="user-auth">
    {user ? (
      <>
        <div className="user-hola">
          Hello <img src={ user?.photoURL } alt="#" /> { user?.displayName }
          <div className="user-auth__sub">
            <a href="#" onClick={ onHandleLogout }>Logout</a>
          </div>
        </div>
      </>
    ) : (
      <button className="button-link" onClick={onSignInWithGoogle}>Sign In with Google</button>
    )}
  </div>
}