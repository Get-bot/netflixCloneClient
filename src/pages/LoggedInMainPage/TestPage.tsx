import {useNavigate} from "react-router-dom";

import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {selectAuthState} from "../../features/auth/authSlice";
import { fetchUserAsync } from "../../features/test/testSlice";

const TestPage = () => {
  const navigate = useNavigate();
  const authState = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  if(!authState.isLoggedIn) {
    navigate("/signin");
  }

  const getAll = () => {
    dispatch(fetchUserAsync("all"));
  }

  const getUser = () => {
    dispatch(fetchUserAsync("user"));
  }

  const getModerator = () => {
    dispatch(fetchUserAsync("mod"));
  }

  const getAdmin = () => {
    dispatch(fetchUserAsync("admin"));
  }

  return (
    <div style={{marginTop:"200px"}}>
      <button
        style={{width: "200px", height: "50px", backgroundColor: "blue"}}
        onClick={getAll}
      >
        getAll
      </button>
      <button
        style={{width: "200px", height: "50px", backgroundColor: "blue"}}
        onClick={getUser}
      >
        getUser
      </button>
      <button
        style={{width: "200px", height: "50px", backgroundColor: "blue"}}
        onClick={getModerator}
      >
        getModerator
      </button>
      <button
        style={{width: "200px", height: "50px", backgroundColor: "blue"}}
        onClick={getAdmin}
      >
        getAdmin
      </button>
    </div>
  );
}

export default TestPage;