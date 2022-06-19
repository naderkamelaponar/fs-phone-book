// بسم الله الرحم الرحيم
const PhoneLine=({name,number})=>{
    return name || number ? <p > {name} | {number} </p> : null;
}
export default PhoneLine;