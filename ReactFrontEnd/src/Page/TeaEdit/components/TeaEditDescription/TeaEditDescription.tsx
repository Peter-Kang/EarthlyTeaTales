const TeaEditDescription = ()=>{
    return (
    <div>{/* Description 900 chars */}
        <label style={{display:"block"}}>Description:</label>
        <textarea maxLength={900}></textarea>
    </div>)
};

export default TeaEditDescription;