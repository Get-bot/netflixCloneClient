import classes from './ButtonCard.module.css'

const ButtonCard = (props: any) => {

  const clickHandler = (e: any) => {
    props.onClick(e);
  }

   return (
     <button className={`${classes.btnCard} ${props.className}`} type={props.type} onClick={clickHandler}>
       {props.children}
     </button>
   );
}

export default ButtonCard