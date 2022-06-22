// بسم الله الرحم الرحيم
import PhoneBookService from "../services/phonebook"

const PhoneLine=({name,number,id,handleDelete})=>{

    const deletePerson =()=>{
        if (window.confirm(`you're gonna delete ${name} are you sure ?`)){
            PhoneBookService.deletePerson(id)
            .then(()=>{handleDelete()})
        }
    }
    return  name && number ? <p> {name} | {number} <button onClick={deletePerson}>Delete</button></p>:''

    }
   

export default PhoneLine;