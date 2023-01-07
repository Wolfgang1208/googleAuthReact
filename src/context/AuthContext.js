import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // two mode were tested, both work. No need getResultFromRedirect
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth,provider)
  };

  // logOut function
  const logOut = ()=>{
    signOut(auth)
  }

  // unsubscribe: once auth state changed with set the current user to user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User',currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // any children of authcontext provider with follow this
  return (
    <AuthContext.Provider value={{ googleSignIn,logOut,user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
