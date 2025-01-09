//import TeaCard from "../../Components/TeaCard/TeaCard.tsx"; <TeaCard></TeaCard>
import {Button, Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';

import "./TeaLoadOut.css"

const TeaLoadOut = () => 
{
    const rowStyle = {
        alignSelf: "center",
        marginInline: "auto"
    };
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
            <div style={rowStyle}>
                    <img width="150px" src="https://happyearthtea.com/cdn/shop/files/IMG_3131_374x374.jpg?v=1711121609"></img>
                    <div>
                        <label><b>Da Hong Pao - Red Robe - Pressed</b></label>
                        <div>
                            <label><b>Rating:</b>3/5</label>
                        </div>
                    </div>
                    <Button type='submit'>Edit</Button>
            </div> {/* Row */}
        </div>{/* Row holder */}
    {/* page component */}</div>);
}

export default TeaLoadOut;