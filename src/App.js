// بسم الله الرحمن الرحيم
import { useState ,useEffect} from "react"
import Filter from "./components/Filter";
import PhoneLine from "./components/PhoneLine";
import AddNew from "./components/AddNew";
import PhoneBookService from './services/phonebook'

const App = () => {
const [name, setName] = useState("");
const [number,setNumber] = useState("");
const [filter,setFilter] = useState(false);
const [fValue,setFValue] = useState("");
const [phoneBook,setPhoneBook] = useState([{}]);
const setPhoneBookData =()=>{
    PhoneBookService.getAll().then(data=>{setPhoneBook(data)})
}
useEffect(setPhoneBookData,[fValue]);

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
        if (window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)){
            const updatePerson={name,number,id:personId}
            const data =PhoneBookService.updatePerson(updatePerson)
            data.then(()=>{
                setPhoneBookData();
                return
            })
            
        }    
        return 
    }
 
    const newPerson={name,number};
    const data = PhoneBookService.addNew(newPerson)
    data.then((res)=>{
        setPhoneBook(phoneBook.concat(res))})
    setName("");
    setNumber("")
    setFilter(false);
}
return (
<>
<h1> بسم الله الرحمن الرحيم</h1>
<h2>Phone Book 2.17</h2>
<h3>Filter :</h3>
<div> Filter : <input placeholder="Filter the names" value={fValue}  onChange={handleFilter}/></div>
<AddNew name={name} number={number} handleName={handleName} handleNumber={handleNumber} handleSubmit={handleSubmit}/>
{filter ? <Filter fValue={fValue} phoneBook={phoneBook}/>:phoneBook.map((p,i)=>{return <PhoneLine id={p.id} key={i} handleDelete={setPhoneBookData} name={p.name} number={p.number}/>})}
<footer><a href="https://github.com/naderkamelaponar/fs-phone-book" target={'_blank'} rel={"noreferrer"}>Repo</a></footer>
</>
)


}
export default App