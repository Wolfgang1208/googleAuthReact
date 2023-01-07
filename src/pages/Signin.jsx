import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
// yarn add react-router-dom
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  // async function waiting for pop-up or redirect finishes
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      // navigate('/account');
    } catch (error) {
      console.log(error);
    }
  };

  // should navigate to account once logged in
  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  // should try this googlebutton from thrid party
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8">Sign in</h1>
      <div className="max-w-[240px] m-auto py-4">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;
