import classes from "./SignInput.module.css";
import {UseFormRegister} from "react-hook-form";
import React from "react";
import {Outlet} from "react-router-dom";

interface nameString {
  email: string;
  password: string;
  username: string;
}

interface SignInputProps {
  id: string;
  name: keyof nameString;
  register: UseFormRegister<any>;
  label: string;
  children: React.ReactNode;
}

const SignInput = ({id, register, name, label, children}: SignInputProps) => {

  const showPassword = () => {
    console.log("showPassword Clicked");
  }

  const inputWrapperClasses = {
    email: `${classes.nfEmailInput} ${classes.loginInputEmail}`,
    password: `${classes.nfPasswordInput} ${classes.nfTextFieldPassword}`,
    username: `${classes.nfUsernameInput} ${classes.nfTextFieldUsername}`,
  };

  const inputControlsClasses = {
    email: `${classes.nfEmailControls}`,
    password: `${classes.nfPasswordControls}`,
    username: `${classes.nfUsernameControls}`,
  };

  const inputWrapperEL = document.querySelector(`.${classes.nfInput}`);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationInput = (value: string, name: string,) => {
    switch (name) {
      case 'email':
        if (emailRegex.test(value) && value.length > 0) {
          inputWrapperEL?.classList.remove(classes.InError);
        } else {
          inputWrapperEL?.classList.add(classes.InError);
        }
        break;
      case 'password':
        if (value.length > 4) {

        }
        break;
    }
  }

  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 0) {
      e.target.classList.add(classes.hasText);
      validationInput(value, name);
    } else {
      inputWrapperEL?.classList.remove(classes.InError);
    }
  }

const setRegisterOptions = () => {
    switch (name) {
      case 'email':
        return {
          required: "이메일 주소는 반드시 입력하셔야 합니다.",
          pattern: {
            value: emailRegex,
            message: "이메일 주소를 정확히 입력하세요.",
          },
          onChange: InputChangeHandler,
        }
      case 'password':
        return {
          required: "비밀번호는 반드시 입력하셔야 합니다.",
          minLength: {
            value: 4,
            message: "비밀번호는 4자 이상이어야 합니다.",
          },
          maxLength: {
            value: 60,
            message: "비밀번호는 60자 이하여야 합니다.",
          },
          onChange: InputChangeHandler,
          }
      case 'username':
        return {
          required: "이름은 반드시 입력하셔야 합니다.",
          minLength: {
            value: 2,
            message: "이름은 2자 이상이어야 합니다.",
          },
          maxLength: {
            value: 20,
            message: "이름은 20자 이하여야 합니다.",
          },
          onChange: InputChangeHandler,
        }
    }
}

const registerOptions = setRegisterOptions();

  return (
    <div className={`${classes.nfInput} ${classes.loginInput} ${inputWrapperClasses[name]}`}>
      <div className={classes.nfInputPlacement}>
        <div className={inputControlsClasses[name]}>
          <label className={classes.inputId} placeholder="">
            <input
              type="text"
              className={classes.nfTextField}
              id={`id_${id}`}
              tabIndex={0}
              placeholder=""
              {...register(name, registerOptions)}
            />
            <label htmlFor={`id_${id}`} className={classes.placeLabel}>
              {label}
            </label>
          </label>
          {name === 'password' &&
            <button className={classes.nfPasswordToggle} id="id_password_toggle" type="button" onClick={showPassword} title="비밀번호 표시">표시</button>
          }
        </div>
      </div>
      {children}
    </div>
  )
}

export default SignInput

