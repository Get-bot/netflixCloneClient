import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../../store/hooks";
import {commonAction} from "../../../features/common/commonSlice";

import classes from "./SignIn.module.css";


const SignInBtn = (props: any) => {

  return (
    <div className={classes.loginContainer}>
      <div>
        <NavLink role="button" className={classes.loginButton} id="signIn" to={"/signin"}>로그인</NavLink>
      </div>
    </div>
  );
};

export default SignInBtn;
