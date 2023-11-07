import EmailInput from "../EmailInput/EmailInput";
import classes from "./CreateAccount.module.css";
import GetStarted from "../GetStarted/GetStarted";

const CreateAccount: React.FC<{
  className: String;
  labelId: string;
  id: string;
}> = (props: any) => {

  return (
    <div className={classes[props.className]}>
      <div className={classes.createAccount}>
        <form className={classes.createAccountForm} aria-label="넷플릭스에 가입하거나 멤버십을 재시작하세요." method="post">
          <h3 className={classes.createAccountTextTitle}>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
          <div data-issplitform="false" data-hasmessage="false" className={classes.createAccountInputContainer}>
            <EmailInput id={props.id} labelId={props.labelId} labelText={"이메일 주소"}/>
            <GetStarted/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
