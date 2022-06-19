// بسم الله الرحمن الرحيم
import { useState } from "react"
import Filter from "./components/Filter";
import PhoneLine from "./components/PhoneLine";
import AddNew from "./components/AddNew";
const App = () => {
const [name, setName] = useState("");
const [number,setNumber] = useState("");
const [filter,setFilter] = useState(false);
const [fValue,setFValue] = useState("");
const [phoneBook,setPhoneBook] = useState([{}]);
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
    
    if (phoneBook.filter((a)=>{
        const aName=a.name?a.name:"";
        return aName.toLowerCase()===name.toLowerCase()}).length>0){
        alert(`${name} is already in the phone book`);
        return;
    }
    const newPerson={id:phoneBook.length,name:name,number:number}
    setPhoneBook(phoneBook.concat(newPerson));
    setName("");
    setNumber("")
    setFilter(false);
}
return (
<>
<h1> بسم الله الرحمن الرحيم</h1>
<h2>Phone Book 2.10</h2>
<h3>Filter :</h3>
<div> Filter : <input placeholder="Filter the names" value={fValue}  onChange={handleFilter}/></div>
<AddNew name={name} number={number} handleName={handleName} handleNumber={handleNumber} handleSubmit={handleSubmit}/>
{filter ? <Filter fValue={fValue} phoneBook={phoneBook}/>:phoneBook.map((p,i)=>{return <PhoneLine key={i} name={p.name} number={p.number}/>})}
<footer><a href="">Repo</a></footer>
</>
)


}
export default App