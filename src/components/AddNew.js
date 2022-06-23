// بسم الله الرحمن الرحيم

const AddNew = (props) => {
   

    const { name,number,handleSubmit ,handleName,handleNumber } =props
//<Notification message={message}type={'success'}/>    
    return (
    <>    <form onSubmit={handleSubmit}>
    <h3>Add New:</h3>
    <div> name&nbsp;&nbsp;&nbsp;&nbsp; <input placeholder="Enter the Name" value={name} onChange={handleName}/></div>
    <div> number&nbsp; :&nbsp; <input placeholder="Enter the Phone Number" value={number} onChange={handleNumber}/></div>
    <div><button >Save</button></div>
</form>

</>
    )
}
export default AddNew;