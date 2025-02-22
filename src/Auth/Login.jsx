import { useContext } from "react";

import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { signInWithGoogle, user } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className=" flex w-full h-screen justify-center items-center">
      <div className=" w-fit h-fit p-4 ">
            <div>
            <h1 className=" text-xl lg:text-3xl font-bold theme-text text-center">Welcome to Taskify!</h1>
            <p>Simplify your workflow—log in with Google and get started.</p>
            </div>
        <div className=" cursor-pointer w-fit mx-auto mt-5" onClick={handleGoogleLogin}>
          <Button className=" flex items-center gap-2 rounded bg-primary-light cursor-pointer">
            <FcGoogle className=" text-xl" /> Continue with google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
