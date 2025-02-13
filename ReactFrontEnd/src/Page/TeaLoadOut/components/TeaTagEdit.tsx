import { useState } from "react";
import { useTags } from "../../../Hooks/useTeaTags";

const TeaTagEdit = () => {
    
    const tagLabelCSS = {
        height: "55px",
        width: "100%",
        borderRadius: "25px",
        padding:"5px",
        backgroundColor: "Green",
        border: "black",
        color: "white",
    };
    const closeIcon =  {
        marginLeft: "8px",
        fontWeight: "bold",
        cursor: "pointer",
    };
    const tagContainerStyle = {
        padding:"7px",
        
    };
    const {tags, createTag , deleteTag } = useTags();
    const [newTagName, setNewTagName] = useState("");
    return (
    <div>
        <h2>Tea Tags</h2>
        <div>
            <input type="text" maxLength={20} value={newTagName} onChange={(e)=>setNewTagName(e.target.value)} style={{width:"150px"}}/>
            <button onClick={()=>createTag(newTagName)}>Add Tag</button>
        </div>
        <div style={tagContainerStyle}>
            {
            Array.from(tags).map(item => (
            <label key={item} style={tagLabelCSS}>
                {item}
                <span style={closeIcon} onClick={()=>deleteTag(item)}>&times;</span>
            </label>))}
        </div>
    </div>)
}

export default TeaTagEdit;