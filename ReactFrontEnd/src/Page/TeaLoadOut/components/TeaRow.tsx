//import {Button} from 'react-aria-components';

const rowStyle = {
    marginInline: "auto",
    width: "auto",
    display: "flex",
    verticalAlign:"middle",
    margin:"auto",
    gap:"5px"
};

const TeaRow = () => {
    return  ( 
        <div style={rowStyle}>
            <img style={{float:"left"}} width="150px" src="https://happyearthtea.com/cdn/shop/files/IMG_3131_374x374.jpg?v=1711121609"></img>
            <div style={{verticalAlign:"middle", textAlign:"center", margin:"auto"}}>
                <label><b>Da Hong Pao - Red Robe - Pressed</b></label>
                <div>
                    <label><b>Rating:</b>3/5</label>
                </div>
                <div>
                    <label><b>Tags:</b> Oolong, Gong fu </label>
                </div>
            </div>
            <button style={{height:"25px", float:"right", textAlign:"center", margin:"auto"}} type='submit'>Edit</button>
        {/* Row */}</div> );
}

export default TeaRow;