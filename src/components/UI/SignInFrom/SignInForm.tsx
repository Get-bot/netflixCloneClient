import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {selectIsLoggedIn, signInAsync} from "../../../features/auth/authSlice";
import classes from './SignInForm.module.css';
import SignInput from "../SignInput/SignInput";

interface SignInFormValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const [saveInfoChecked, setSaveInfoChecked] = useState(false);

  const {register, handleSubmit, formState: {errors}} = useForm<SignInFormValues>({
    mode: "onChange",
  });

  const submitHandler: SubmitHandler<SignInFormValues> = (data) => {
    dispatch(signInAsync({email: data.email, password: data.password}));
  }

  const saveLoginInfoChangeHandler = () => {
  }

  const saveLoginInfoClickHandler = () => {
    saveInfoChecked ? setSaveInfoChecked(false) : setSaveInfoChecked(true);
  }

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className={classes.hybridLoginFormMain}>
        <h1 data-uia="login-page-title">로그인</h1>
        <form method="post" className={classes.loginForm} action="" onSubmit={handleSubmit(submitHandler)}>
          <SignInput id={"emailInput"} name={"email"} register={register} label={"이메일 주소"}>
            {errors.email && <div className={classes.inputError}>{errors.email.message}</div>}
          </SignInput>
          <SignInput id={"passwordInput"} name={"password"} register={register} label={"비밀번호"}>
            {errors.password && <div className={classes.inputError}>{errors.password.message}</div>}
          </SignInput>
          <button className={classes.loginButton} type="submit" tabIndex={0}>
            로그인
          </button>
          <div className={classes.hybridLoginFormHelp}>
            <div className={`${classes.uiBinaryInput} ${classes.loginRememberMe}`}>
              <input
                type="checkbox"
                className=""
                name="rememberMe"
                id="bxid_rememberMe_true"
                value="true"
                tabIndex={0}
                checked={saveInfoChecked}
                onChange={saveLoginInfoChangeHandler}
              />
              <label htmlFor="bxid_rememberMe_true" onClick={saveLoginInfoClickHandler}>
          <span className={classes.loginRememberMeLabelText}>
            로그인 정보 저장
          </span>
              </label>
              <div className={classes.helper}></div>
            </div>
            <a className={classes.loginHelpLink} href="#">
              도움이 필요하신가요?
            </a>
          </div>
        </form>
      </div>
      <div className={classes.hybridLoginFormOther}>
        <div className={classes.loginSignupNow}>
          Netflix 회원이 아닌가요?{" "}
          <a className={classes.yourClassNameForLink} target="_self" href="/">
            지금 가입하세요
          </a>
          .
        </div>
        <div className={classes.recaptchaTermsOfUse}>
          <p>
      <span>
        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
        확인합니다.
      </span>
            &nbsp;
            <button
              className={classes.recaptchaTermsOfUseLinkButton}>
              자세히 알아보기.
            </button>
          </p>
          <div className={classes.recaptchaTermsOfUseDisclosure}>
      <span id="">
        Google reCAPTCHA가 수집하는 정보에는 Google{" "}
        <a
          href="https://policies.google.com/privacy"
          id="recaptcha-privacy-link"
          target="_blank"
        >
          개인정보처리방침
        </a>
        과{" "}
        <a
          href="https://policies.google.com/terms"
          id="recaptcha-tos-link"
          target="_blank"
        >
          서비스 약관
        </a>
        이 적용되며, 해당 정보는 reCAPTCHA 서비스 제공, 관리 및 개선과
        일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤 광고에 사용 안
        함).
      </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;