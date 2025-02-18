import { useEffect, useState } from "react";
import { Steep, SteepInstructions } from "../Models/Steep.tsx"


export const useTeaSteep = () =>{
    const [ currentSteepInstructions, setCurrentSteepInstructions] = useState<Array<SteepInstructions>>([]);
    const createTeaSteepInstructions:()=>Promise<void> = async ()=>{
        setCurrentSteepInstructions([...currentSteepInstructions, new SteepInstructions])
    };
    return {currentSteepInstructions, createTeaSteepInstructions};
}