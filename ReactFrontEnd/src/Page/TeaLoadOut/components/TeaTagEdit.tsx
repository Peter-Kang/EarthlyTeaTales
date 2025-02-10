
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
    return (
    <div>
        <h2>Tea Tags</h2>
        <div>
            <input type="text" maxLength={20} style={{width:"150px"}}></input>
            <button>Add Tag</button>
        </div>
        <div style={tagContainerStyle}>
            <label style={tagLabelCSS}>
                green
                <span style={closeIcon}>&times;</span>
            </label>
            <label style={tagLabelCSS}>
                black
                <span style={closeIcon}>&times;</span>
            </label>
            <label style={tagLabelCSS}>
                Oolong
                <span style={closeIcon}>&times;</span>
            </label>
            <label style={tagLabelCSS}>
                Puer
                <span style={closeIcon}>&times;</span>
            </label>
            <label style={tagLabelCSS}>
                herbal
                <span style={closeIcon}>&times;</span>
            </label>
        </div>
    </div>)
}

export default TeaTagEdit;