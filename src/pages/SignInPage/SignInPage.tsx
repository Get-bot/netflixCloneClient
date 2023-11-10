import SignIn from "../../components/SignIn/SignIn";
import {useEffect} from "react";

import {useAppDispatch} from "../../store/hooks";
import {commonAction} from "../../features/common/commonSlice";

const SignInPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commonAction.setSignIn());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <SignIn/>
}

export default SignInPage;