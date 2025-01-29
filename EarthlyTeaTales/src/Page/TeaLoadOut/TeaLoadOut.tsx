//import TeaCard from "../../Components/TeaCard/TeaCard.tsx"; <TeaCard></TeaCard>
import {Button} from 'react-aria-components';
import TeaRow from "./component/TeaRow";

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
        <div style={{textAlign:"center"}}>
            <Button type="button" onPress={() => console.log('Clicked')}>Add A New Tea</Button>
        </div>
        <div style={rowContainerStyle}>
           <TeaRow></TeaRow>
        </div>{/* Row holder */}
    {/* page component */}</div>);
}

export default TeaLoadOut;