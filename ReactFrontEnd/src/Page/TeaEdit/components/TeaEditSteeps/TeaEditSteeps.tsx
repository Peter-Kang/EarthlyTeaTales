import { useTeaSteep } from "../../../../Hooks/useTeaSteeps.ts"

const TeaEditSteeps = () => {
    const { currentSteepInstructions, createTeaSteepInstructions } = useTeaSteep();
    return (<div className="mainDetails">{/* Steeping notes Up to 7 repeats
        Steep # and temperature in F (repeat up to 20th)
        Review*/}
        <h3>Steeps</h3>
        <button onClick={() => createTeaSteepInstructions()}>New Set</button>
        {currentSteepInstructions.map((currentSteepInstruction, index) => (
            <details className="mainDetails" key={index}> {/* Gong Fu*/}
                <summary>{currentSteepInstruction.name}</summary>
                <div>
                    <label>Name: </label>
                    <input type="text" maxLength={64} value={currentSteepInstruction.name}></input>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" maxLength={256} value={currentSteepInstruction.description}></input>
                </div>
                <div>
                    <div>
                        <label>Wash</label>
                        <input type="checkbox" checked={currentSteepInstruction.washed}></input>
                    </div>
                    <div>
                        <div>
                            <button>Add Steep</button>
                        </div>
                        {
                            currentSteepInstruction.steeps.map(currentSteep => (
                                <div>
                                    <label>Steep</label>
                                    <div>
                                        <label>Temperature</label>
                                        <input type="text" maxLength={3} style={{ width: "3ch" }} value={currentSteep.temperature}></input>F
                                    </div>
                                    <div>
                                        <label>Time</label>
                                        <input type="text" maxLength={3} style={{ width: "3ch" }} value={currentSteep.timeInSeconds}></input>seconds
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </details>
        ))}

    </div>)
}

export default TeaEditSteeps;