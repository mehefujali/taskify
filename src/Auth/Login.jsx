import { useContext } from "react";
import MyButton from "../Shaird/MyButton";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const Login = () => {
      const {signInWithGoogle , user} = useContext(AuthContext)
      const handleGoogleLogin = () => {
            signInWithGoogle()
      }

    if(user){
      return <Navigate to="/"/>
    }
      return (
            <div>
                  <div onClick={handleGoogleLogin}>
                  <MyButton >Google login</MyButton>
                  </div>
            </div>
      );
};

export default Login;