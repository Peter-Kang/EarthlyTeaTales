import './TeaEdit.css';

const TeaEdit = ()=>{
   
    return (
        <div>
            <div>
                 {/* Image url*/}
                <label>Image</label>
                <image></image>
                <input type="file"></input>
            </div>
            <div>
                {/* Name 20 chars*/}
                <label>Name:</label>
                <input type="text" maxLength={20}></input>
            </div>
            <div>
                {/* Overall rating out of 5*/} 
                <label>Rating:</label>
                <select>
                    <option value="--">--</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>/5
            </div>
            <div>
                 {/* Tags 5 tags, drop down and button for adding*/}
                <label>Tags:</label>
                <select>
                    <option>--</option>
                    <option>Oolong</option>
                    <option>Green</option>
                    <option>Black</option>
                    <option>Pur eh</option>
                    <option>Herbal</option>
                    <option>Gong fu</option>
                    <option>Western</option>
                </select>
                <button>Add Another Tag</button>
            </div>
            <div>
                {/* Description 900 chars */}
                <label>Description</label>
                <textarea maxLength={900}></textarea>
            </div>
            <div>
                {/* Up to 7 repeats
                Steep # and temperature in F (repeat up to 20th)
                Review*/}

            </div>
        </div>
    )
}

export default TeaEdit;