// بسم الله الرحمن الرحيم

const Notification =({message,type}) =>{
 
    if (message ==='') return null;
    
    const classType=type ==='error' ? 'error':'success';
    

    return(
        <div  className={classType +' msg'}>{message}</div>
    )
}
export default Notification;