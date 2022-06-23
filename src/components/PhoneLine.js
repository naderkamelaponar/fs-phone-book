// بسم الله الرحم الرحيم
import PhoneBookService from "../services/phonebook"
//import Notification from "./Notifications";
import { useState } from "react";
const PhoneLine=({name,number,id,handleDelete})=>{
const [deleteButton,setDeleteButton]=useState(false);
//<Notification message={message} type={"error"}/>
    const deleteAperson =(event)=>{
        event.preventDefault();
        const confirmation=window.confirm(`Are you sure you want to delete ${name}`);
        if (confirmation){
        setDeleteButton(true);
           handleDelete(name,id)
        }
    }
    return  name && number ?<>
     <form hidden={deleteButton} onSubmit={deleteAperson}> <p> {name} | {number} <button >Delete</button></p></form>
     </>:''

    }
   

export default PhoneLine;