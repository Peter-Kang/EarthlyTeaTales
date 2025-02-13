import TeaRow from "./components/TeaRow";
import TeaTagEdit from "./components/TeaTagEdit";
import "./TeaLoadOut.css"


const TeaLoadOut = () => 
{
    const rowContainerStyle = {
        display: "grid",
        gridTemplateRows:  "auto",
        gridTemplateColumns: "100%",
        gridTemplateAreas:
            `
            'filters',
            'rowContainer'
            `
    }
    return (
    <div style={{
        textAlign: "center"}}>
        <TeaTagEdit></TeaTagEdit>
        <h2>Teas</h2>
        <div style={{textAlign:"center"}}>
            <button type="button">Add A New Tea</button>
        </div>
        <div style={rowContainerStyle}>
           <TeaRow></TeaRow>
           <TeaRow></TeaRow>
           <TeaRow></TeaRow>
        </div>{/* Row holder */}
    {/* page component */}</div>);
}

export default TeaLoadOut;