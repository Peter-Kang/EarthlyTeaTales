import './TeaEdit.css';

const TeaEdit = ()=>{
   
    return (
        <div>
            <div>{/* Image url*/}
                <label>Image:</label>
                <div>
                    <img width="150px" src="https://happyearthtea.com/cdn/shop/files/IMG_3131_374x374.jpg?v=1711121609"></img>
                </div>
                <input type="file"></input>
            </div>
            <div> {/* Name 20 chars*/}
                <label>Name:</label>
                <input type="text" maxLength={20}></input>
            </div>
            <div>{/* Overall rating out of 5*/} 
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
            <div>{/* Tags 5 tags, drop down and button for adding*/}
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
            <div>{/* Description 900 chars */}
                <label>Description</label>
                <textarea maxLength={900}></textarea>
            </div>
            <div>{/* Steeping notes Up to 7 repeats
                Steep # and temperature in F (repeat up to 20th)
                Review*/}
                <div> {/* Gong Fu*/}
                    <div>
                        <label>Name: </label>
                        <input type="text" maxLength={64} value="GongFu"></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea> </textarea>
                    </div>
                    <div>
                        <div>
                            <label>Wash</label>
                            <input type="checkbox" checked></input>
                        </div>
                        <div> {/*Steep 1*/}
                            <label>Steep 1</label>
                            <div>
                                <label>Temperature</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>F
                            </div>
                            <div>
                                <label>Time</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}} ></input>seconds 
                            </div>
                        </div>
                        <div> {/*Steep 2*/}
                            <label>Steep 2</label>
                            <div>
                                <label>Temperature</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>F
                            </div>
                            <div>
                                <label>Time</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>seconds 
                            </div>
                        </div>
                        <div> {/*Steep 3*/}
                            <label>Steep 3</label>
                            <div>
                                <label>Temperature</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>F
                            </div>
                            <div>
                                <label>Time</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>seconds 
                            </div>
                        </div>
                        <div> {/*Steep 4*/}
                            <label>Steep 4</label>
                            <div>
                                <label>Temperature</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>F
                            </div>
                            <div>
                                <label>Time</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>seconds 
                            </div>
                        </div>
                        <div> {/*Steep 5*/}
                            <label>Steep 5</label>
                            <div>
                                <label>Temperature</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>F
                            </div>
                            <div>
                                <label>Time</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>seconds 
                            </div>
                        </div>
                    </div>
                </div>

                <div> {/* Western */}
                    <div>
                        <label>Name:</label>
                        <input type="text" maxLength={64} value="Western"></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea> </textarea>
                    </div>
                    <div>
                        <div>
                            <label>Wash</label>
                            <input type="checkbox"></input>
                        </div>
                        <div> {/*Steep 1*/}
                            <label>Steep 1</label>
                            <div>
                                <label>Temperature</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}}></input>F
                            </div>
                            <div>
                                <label>Time</label>
                                <input type="text" maxLength={3} style={{width:"3ch"}} ></input>seconds 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeaEdit;