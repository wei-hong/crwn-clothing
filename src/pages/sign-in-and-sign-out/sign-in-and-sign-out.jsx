import React from "react";

import "./sign-in-and-sign-out.scss";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "./../../components/sign-up/sign-up";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
