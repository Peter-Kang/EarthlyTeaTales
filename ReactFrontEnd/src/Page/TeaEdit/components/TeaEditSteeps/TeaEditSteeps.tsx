

const TeaEditSteeps = ()=>{
    return (<div>{/* Steeping notes Up to 7 repeats
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
    </div>)
}

export default TeaEditSteeps;