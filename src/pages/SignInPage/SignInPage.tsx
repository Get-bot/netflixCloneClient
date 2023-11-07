import {useForm, SubmitHandler} from "react-hook-form"
import {useEffect} from "react";

import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {selectAuthUser, selectAuthError, signInAsync} from "../../features/auth/authSlice";
import {history} from "../../helpers/history";


interface ILoinForm {
  email: string;
  password: string;
}

const SignInPage = () => {
  const dispatch = useAppDispatch()
  const authUser = useAppSelector(selectAuthUser)
  const authError = useAppSelector(selectAuthError)

  useEffect(() => {
    if (authUser?.id) history.navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ILoinForm>({
    mode: "onChange",
  })


  const onSubmit: SubmitHandler<ILoinForm> = (data) => {
    dispatch(signInAsync({email: data.email, password: data.password}));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "200px"}}>
      <input {...register("email", {required: true})} />
      {errors.email && <span>This field is required</span>}

      <input {...register("password", {required: true})} />
      {errors.password && <span>This field is required</span>}

      <button type="submit" style={{width: "200px", height: "50px", backgroundColor: "black"}}/>
      {authError &&
        <div>{authError}</div>
      }
    </form>
  )

};

export default SignInPage;