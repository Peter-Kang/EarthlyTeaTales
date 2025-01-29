import {Button} from 'react-aria-components';

const rowStyle = {
    marginInline: "auto",
    width: "60%",
    display: "block",
    verticalAlign:"middle"
};

const TeaRow = () => {
    return  ( 
        <div style={rowStyle}>
            <img style={{float:"left"}} width="150px" src="https://happyearthtea.com/cdn/shop/files/IMG_3131_374x374.jpg?v=1711121609"></img>
            <div style={{display:"table-cell", verticalAlign:"middle", textAlign:"center"}}>
                <label><b>Da Hong Pao - Red Robe - Pressed</b></label>
                <div>
                    <label><b>Rating:</b>3/5</label>
                </div>
                <div>
                    <label><b>Tags:</b> Oolong, Gongfu </label>
                </div>
            </div>
            <Button style={{float:"right"}} type='submit'>Edit</Button>
        {/* Row */}</div> );
}

export default TeaRow;