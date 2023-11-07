import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectAuthUser} from "../features/auth/authSlice";

import MainPage from "./MainPage/MainPage";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const authUser = useAppSelector(selectAuthUser);

  return (
    <>
      {!authUser?.id && <MainPage/>}
    </>
  )
}

export default HomePage;
