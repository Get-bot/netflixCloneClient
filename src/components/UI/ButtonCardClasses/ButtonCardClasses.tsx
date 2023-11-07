
const ButtonCardClasses = (props: any) => {

  const clickHandler = (e: any) => {
    props.onClick(e);
  }

   return (
     <button className={props.className} type={props.type} onClick={clickHandler}>
       {props.children}
     </button>
   );
}

export default ButtonCardClasses