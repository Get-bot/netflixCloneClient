import LanguageSelect from "../LanguageSelect/LanguageSelect";
import classes from "./SignInFooter.module.css";

const footerTexts = [
  "자주 묻는 질문",
  "고객 센터",
  "이용 약관",
  "개인정보 처리방침",
  "쿠키 설정",
  "회사 정보"
];
const SignInFooter = () => {
  return (
    <div className={`${classes.siteFooterWrapper} centered`}>
      <div className={classes.footerDivider}></div>
      <div className={classes.siteFooter}>
        <p className={classes.footerTop}>
          질문이 있으신가요? 문의 전화: &nbsp;
          <a className={classes.footerTopA} href="tel:00-308-321-0161 (수신자 부담)">
            00-308-321-0161 (수신자 부담)
          </a>
        </p>
        <ul className={`${classes.footerLinks} ${classes.structural}`}>
          {footerTexts.map((text, index) => {
            return (
              <li key={index} className={classes.footerLinkItem}>
                <a className={classes.footerLink} href="#">
                  <span>{text}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <LanguageSelect id="login-footer-lang-select" className=""/>
        <div className={classes.copyText}>
          Coded by:{" "}
          <a href="https://github.com/JonathanP4/">CHOI BUM JIN</a>
          <br/>
          <br/>
          Original site:{" "}
          <a href="https://www.netflix.com/br-en/">Netflix Korea</a> <a href="https://github.com/JonathanP4/">Jonathan Petersen</a>
        </div>
      </div>
    </div>
  )
}

export default SignInFooter