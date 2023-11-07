import LanguageSelect from "../UI/LanguageSelect/LanguageSelect";
import classes from "./Footer.module.css";

const Footer = (props: any) => {
    return (
        <div className={classes.footerMaster}>
            <div className={classes.footer}>
        <span>
          질문이 있으신가요? 문의 전화: <a href="tel:010-5850-5968" className={classes.tellUnderline}> 00-308-321-0161 (수신자 부담)</a>
        </span>
                <div>
                    <ul className={classes.contactList}>
                        <li>
                            <a href="#">자주 묻는 질문</a>
                        </li>
                        <li>
                            <a href="#">고객 센터</a>
                        </li>
                        <li>
                            <a href="#">계정</a>
                        </li>
                        <li>
                            <a href="#">미디어 센터</a>
                        </li>
                        <li>
                            <a href="#">투자 정보(IR)</a>
                        </li>
                        <li>
                            <a href="#">입사 정보</a>
                        </li>
                        <li>
                            <a href="#">넷플릭스 지원 디바이스</a>
                        </li>
                        <li>
                            <a href="#">이용 약관</a>
                        </li>
                        <li>
                            <a href="#">개인정보 처리방침</a>
                        </li>
                        <li>
                            <a href="#">쿠키 설정</a>
                        </li>
                        <li>
                            <a href="#">회사 정보</a>
                        </li>
                        <li>
                            <a href="#">문의하기</a>
                        </li>
                        <li>
                            <a href="#">속도 테스트</a>
                        </li>
                        <li>
                            <a href="#">법적 고지</a>
                        </li>
                        <li>
                            <a href="#">오직 넷플릭스에서</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.footerLangSelect}>
                    {/*<LanguageSelect id="footer_lang_select" className=""/>*/}
                </div>
                <span className={classes.copyright}>Netflix Korea</span>
                <div className={classes.attribution}>
                    Coded by:{" "}
                    <a href="https://github.com/JonathanP4/">CHOI BUM JIN</a>
                    <br/>
                    Original site:{" "}
                    <a href="https://www.netflix.com/br-en/">Netflix Korea</a> <a href="https://github.com/JonathanP4/">Jonathan Petersen</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
