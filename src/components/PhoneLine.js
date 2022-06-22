// بسم الله الرحم الرحيم
const PhoneLine=({name,number,id})=>{
    console.log('id',id)
    return name || number ? <p > {name} | {number} <button>Edit</button> </p> : null;
}
export default PhoneLine;