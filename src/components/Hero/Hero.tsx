import CreateAccount from "../UI/CreateAccount/CreateAccount";
import classes from "./Hero.module.css";

const Hero = (props: any) => {

  return (
    <div className={classes.heroCardContainer}>
      <div className={classes.heroImageContainer}>
        <div className={classes.heroBackground}>
          <img
            alt="hero-background"
            aria-hidden="true"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/17c59414-3f6c-4380-a404-f67d532b7370/KR-ko-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            className={classes.heroImage}
          />
          <div className={classes.heroGradientOverlay}></div>
        </div>
      </div>
      <div className={classes.heroContentContainer}>
        <div className={classes.heroTitleContainer}>
          <h1 className={classes.heroTitle}>
            웃음. 눈물. 스릴. 넷플릭스에서 모두 만나보세요
          </h1>
          <p className={classes.heroSubtitle}>
            끝없는 콘텐츠의 세계. 월 5,500원으로 시작하세요. 해지는 언제든 가능합니다.
          </p>
          <CreateAccount className={"createAccountHeroContainer"} labelId="hero-email" id="hero-email"/>
        </div>
        <div className={classes.heroContentSpacer}></div>
      </div>
    </div>
  );
};

export default Hero;
