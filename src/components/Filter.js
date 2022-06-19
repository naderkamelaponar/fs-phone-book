// بسم الله الرحمن الرحيم
import PhoneLine from "./PhoneLine";
const Filter = ({fValue,phoneBook}) => {
    const found = phoneBook.filter((p)=>{ 
        const pName=p.name?p.name:"" ;
        const value= fValue?fValue:"";
        if (pName.toLowerCase().startsWith(value.toLowerCase())) return p
        else return null
    })
    return found.length>0?found.map((p,i)=>{return <PhoneLine key={i} name={p.name} number={p.number}/>}):<p>No match found</p>
}
export default Filter;