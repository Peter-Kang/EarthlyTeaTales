import './TeaEdit.css';
import TeaEditDescription from './components/TeaEditDescription/TeaEditDescription';
import TeaEditImage from './components/TeaEditImage/TeaEditImage';
import TeaEditName from './components/TeaEditName/TeaEditName';
import TeaEditRating from './components/TeaEditRating/TeaEditRating';
import TeaEditSteeps from './components/TeaEditSteeps/TeaEditSteeps';
import TeaEditTags from './components/TeaEditTags/TeaEditTags';

const TeaEdit = ()=>{
   const TeaEditStyle = {
    textAlign: "center" as "center",
    justifyContent: "space-evenly",
    display: "flexbox"
   }
    return (
        <div style={TeaEditStyle}>
            <div className={"mainDetails"} style={{display:"inline-block"}}>
                <div className='mainDetails' style={{float:"left", margin:"5px", padding:"15px"}}>
                    <TeaEditImage></TeaEditImage>
                </div>
                <div className='mainDetails' style={{float:"right", margin:"5px", padding:"15px"}}>
                    <TeaEditName></TeaEditName>
                    <TeaEditRating></TeaEditRating>
                    <TeaEditTags></TeaEditTags>
                    <TeaEditDescription></TeaEditDescription>
                </div>
            </div>
            <TeaEditSteeps></TeaEditSteeps>
        </div>
    )
}

export default TeaEdit;