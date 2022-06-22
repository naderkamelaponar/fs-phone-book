// بسم الله الرحمن الرحيم
import axios from "axios";
const baseUrl = "https://nameless-everglades-97539.herokuapp.com/persons";
const getAll =()=>{
    const request = axios.get(baseUrl);
    return request.then(response => {return response.data});
}
const addNew =(person)=>{
    const request = axios.post(baseUrl,person);
    return request.then(response => {return response.data});
}
const updatePerson =(person)=>{
    const request = axios.put(`${baseUrl}/${person.id}`,person);
    return request.then(response => {return response.data});
}
const deletePerson =(id)=>{
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response=>{return response.data});
}
const PhonebookService = {getAll,addNew,updatePerson,deletePerson}
export default PhonebookService;