import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { PropTypes } from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvier = new GoogleAuthProvider();
  const [loading,setLoading] = useState(true)
  const [user, setUser] = useState(null);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth , googleProvier);
    } catch (error) {
      console.log(error);
    }
  };
  const signOutUser = () =>{
    signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    signInWithGoogle,
    user,
    setUser,
    loading,
    signOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export  {AuthProvider, AuthContext};
