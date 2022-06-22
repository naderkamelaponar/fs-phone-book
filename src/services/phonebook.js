// بسم الله الرحمن الرحيم
import axios from "axios";

const baseUrl="http://localhost:3001/persons";

const instance = axios.create({
    baseURL: baseUrl,
    timeout:1000,
})



const getAll =()=>{
    const request = instance.get(baseUrl);
    
    return request.then(response => {

        return response.data});

}
const addNew =(person)=>{
    const request = instance.post(baseUrl,person);
    return request.then(response => {return response.data});
}
const updatePerson =(person)=>{
    const request = instance.put(`${baseUrl}/${person.id}`,person);
    return request.then(response => {return response.data});
}
const deletePerson =(id)=>{
    console.log(`${baseUrl}/${id}`);
    const request = instance.delete(`${baseUrl}/${id}`);
    return request.then(response=>{return response.data});
}
const PhoneBookService = {getAll,addNew,updatePerson,deletePerson}
export default PhoneBookService;