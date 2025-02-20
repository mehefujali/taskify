import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { PropTypes } from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvier = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvier);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    signInWithGoogle,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
