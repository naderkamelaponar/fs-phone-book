// بسم الله الرحمن الرحيم
import { useState ,useEffect} from "react"
import Filter from "./components/Filter";
import PhoneLine from "./components/PhoneLine";
import AddNew from "./components/AddNew";
import PhoneBookService from './services/phonebook'
import Notification from "./components/Notifications";

const App = () => {
const [name, setName] = useState("");
const [number,setNumber] = useState("");
const [filter,setFilter] = useState(false);
const [fValue,setFValue] = useState("");
const [phoneBook,setPhoneBook] = useState([{}]);
const [msg,setMsg] = useState('');
const [msgType,setMsgType] = useState('');
const setPhoneBookData =()=>{
    PhoneBookService.getAll().then(data=>{setPhoneBook(data)})
}
useEffect(setPhoneBookData,[fValue]);
const finish =()=>{
    setName("");
    setNumber("");
    setTimeout(()=>{    
        setPhoneBookData();  
        setMsg('')  
        },5000)
}
const handleName=(e)=>{
    setName(e.target.value);
}
const handleNumber=(e)=>{
    
    setNumber(e.target.value);
}
const handleFilter = ((e)=>{  
    setFilter(e.target.value!==''?true:false);   
    setFValue(e.target.value);
})
const handleSubmit=(event)=>{
    event.preventDefault();
    let personId=""
    if (phoneBook.filter((a)=>{
        const aName=a.name?a.name.toLowerCase():'';
        if (aName===name.toLowerCase()){
            personId=a.id;
            return true;
        }
        return null
    }).length>0){
        const confirmation=window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)
        if (confirmation){
            const updatePerson={name,number,id:personId}
            const data =PhoneBookService.updatePerson(updatePerson)
            data.then(()=>{
                setMsg(`${name} has been update the phone number`)
                setMsgType('success')
                finish();
            })
            
        }    
        return 
    }
 
    const newPerson={name,number};
    const data = PhoneBookService.addNew(newPerson)
    data.then((res)=>{
    setPhoneBook(phoneBook.concat(res))})
    setMsg(`${name} has been added to phonebook`)
    setMsgType('success')
    setFilter(false);
   finish()
}
const handleDelete=(name,id)=>{
    const data= PhoneBookService.deletePerson(id)
    
    data.then(()=>{
        setMsg(`${name} has been deleted`)
        setMsgType('error')
        finish();
    })
    
}
return (
<>
<h1> بسم الله الرحمن الرحيم</h1>
<h2>Phone Book 2.20</h2>
<Notification message={msg} type={msgType}/>
<h3>Filter :</h3>
<div> Filter : <input placeholder="Filter the names" value={fValue}  onChange={handleFilter}/></div>
<AddNew name={name} number={number} handleName={handleName} handleNumber={handleNumber} handleSubmit={handleSubmit}/>
{filter ? <Filter fValue={fValue} phoneBook={phoneBook}/>:phoneBook.map((p,i)=>{

    return <PhoneLine id={p.id} key={i}  name={p.name} number={p.number} handleDelete={handleDelete}/>})}
<footer><a href="https://github.com/naderkamelaponar/fs-phone-book" target={'_blank'} rel={"noreferrer"}>Repo</a></footer>
</>
)


}
export default App