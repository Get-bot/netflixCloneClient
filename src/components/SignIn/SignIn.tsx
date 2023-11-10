import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useAppSelector} from "../../store/hooks";
import {selectAuthState} from "../../features/auth/authSlice";

import classes from "./SignIn.module.css";
import SignInFooter from "../UI/SignInHeader/SignInFooter";
import SignInBackGround from "../UI/SignInBackGround/SignInBackGround";
import SignInHeader from "../UI/SignInFooter/SignInHeader";
import SignInBody from "../UI/SignInBody/SignInBody";

const SignIn = () => {
  const navigate = useNavigate();
  const authState = useAppSelector(selectAuthState)

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/");
    }
  }, [authState.isLoggedIn]);

  return (
    <div className={classes.loginWrapper}>
      <SignInBackGround/>
      <SignInHeader/>
      <SignInBody/>
      <SignInFooter/>
    </div>
  )

};

export default SignIn;