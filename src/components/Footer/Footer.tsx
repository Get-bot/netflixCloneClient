import LanguageSelect from "../UI/LanguageSelect/LanguageSelect";
import classes from "./Footer.module.css";

const footerLinks = [
  {text: "자주 묻는 질문", url: "https://help.netflix.com/support/412"},
  {text: "고객 센터", url: "https://help.netflix.com"},
  {text: "계정", url: "/youraccount"},
  {text: "미디어 센터", url: "https://media.netflix.com/"},
  {text: "투자 정보(IR)", url: "http://ir.netflix.com/"},
  {text: "입사 정보", url: "https://jobs.netflix.com/jobs"},
  {text: "넷플릭스 지원 디바이스", url: "/watch"},
  {text: "이용 약관", url: "https://help.netflix.com/legal/termsofuse"},
  {text: "개인정보 처리방침", url: "https://help.netflix.com/legal/privacy"},
  {text: "쿠키 설정", url: "#"},
  {text: "회사 정보", url: "https://help.netflix.com/legal/corpinfo"},
  {text: "문의하기", url: "https://help.netflix.com/contactus"},
  {text: "속도 테스트", url: "https://fast.com"},
  {text: "법적 고지", url: "https://help.netflix.com/legal/notices"},
  {text: "오직 넷플릭스에서", url: "https://www.netflix.com/kr/browse/genre/839338"}
];

const Footer = (props: any) => {
  return (
    <footer className={`${classes.footerCard} ${classes[props.className]}`}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.item}>
            <div className={classes.info}>질문이 있으신가요? 문의 전화: <a href="tel:00-308-321-0161">00-308-321-0161 (수신자 부담)</a></div>
          </div>
          <div className={classes.item}>
            <div className={classes.linksCard}>
              <div className={classes.linksWrapper}>
                <ul className={classes.linksContainer}>
                  {footerLinks.map((link, index) => {
                    return (
                      <li key={index} className={classes.linkItem}>
                        <a role="link" className={classes.footerLink} href="#">{link.text}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <LanguageSelect id={"footer-lang-select"} className={""}/>
          <div className={classes.item}>
            <div className={classes.countryName}>넷플릭스 대한민국</div>
          </div>
          <div className={classes.item}>
            <div className={classes.companyInfo}>
              <div className={classes.copyText}>
                Coded by:{" "}
                <a href="https://github.com/JonathanP4/">CHOI BUM JIN</a>
                <br/>
                Original site:{" "}
                <a href="https://www.netflix.com/br-en/">Netflix Korea</a> <a href="https://github.com/JonathanP4/">Jonathan Petersen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
