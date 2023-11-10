import classes from "./SignInBackGround.module.css";

const SignInBackGround = () => {
  return (
    <div className={classes.loginWrapperBackground}>
      <img className={classes.loginWrapperBackgroundImage}
           src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/14989363-0f67-425a-b164-47dbb6a5b61a/KR-ko-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg"
           srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/14989363-0f67-425a-b164-47dbb6a5b61a/KR-ko-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w
           , https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/14989363-0f67-425a-b164-47dbb6a5b61a/KR-ko-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w
           , https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/14989363-0f67-425a-b164-47dbb6a5b61a/KR-ko-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
           alt=""/>
    </div>
  )
}

export default SignInBackGround