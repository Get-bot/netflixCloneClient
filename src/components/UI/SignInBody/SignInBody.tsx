import {useAppSelector} from "../../../store/hooks";
import {selectIsSignIn} from "../../../features/common/commonSlice";
import classes from "./SignInBody.module.css";
import SignInForm from "../SignInFrom/SignInForm";


const SignInBody = () => {
  const isSignIn = useAppSelector(selectIsSignIn);
  console.log("SignInBody isSignIn: ", isSignIn)
  return (
    <div className={classes.loginBody}>
      <div>
        <div
          className={`${classes.loginContent} ${classes.loginForm} ${classes.hybridLoginForm} ${classes.hybridLoginFormSignup}`}>
          {isSignIn ? <SignInForm/> : <></>}
          {/* login or register*/}
        </div>
      </div>
    </div>
  )
}

export default SignInBody