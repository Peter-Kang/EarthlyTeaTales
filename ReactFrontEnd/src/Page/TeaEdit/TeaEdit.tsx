import './TeaEdit.css';
import TeaEditDescription from './components/TeaEditDescription/TeaEditDescription';
import TeaEditImage from './components/TeaEditImage/TeaEditImage';
import TeaEditName from './components/TeaEditName/TeaEditName';
import TeaEditRating from './components/TeaEditRating/TeaEditRating';
import TeaEditSteeps from './components/TeaEditSteeps/TeaEditSteeps';
import TeaEditTags from './components/TeaEditTags/TeaEditTags';

const TeaEdit = ()=>{
   
    return (
        <div>
            <TeaEditImage></TeaEditImage>
            <TeaEditName></TeaEditName>
            <TeaEditRating></TeaEditRating>
            <TeaEditTags></TeaEditTags>
            <TeaEditDescription></TeaEditDescription>
            <TeaEditSteeps></TeaEditSteeps>
        </div>
    )
}

export default TeaEdit;