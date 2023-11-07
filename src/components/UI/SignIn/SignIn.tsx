import ButtonCard from "../ButtonCard/ButtonCard";
import classes from "./SignIn.module.css";

const SignInBtn = (props: any) => {

  return (
    <div className={classes.loginContainer}>
      <div>
        <a role="button" className={classes.loginButton} id="signIn" href="/kr/login">로그인</a>
      </div>
    </div>
  );
};

export default SignInBtn;
