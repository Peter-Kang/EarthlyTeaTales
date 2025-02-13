import { useEffect, useState, useRef } from "react";

const createTagAPICall = async () => {}

const updateTagAPICall = async () => {}

const deleteTagAPICall = async () => {}



export const useTags = () => {
    const [tags, setTags ]= useState<Set<string>>(new Set(["Green","Black","Oolong"]));

    //Get all tags at the start of the call
    const getAllTagAPICall = async () => {};
    useEffect(()=>{getAllTagAPICall();},[]);

    //Creating a tag
    const createTag:(newTagName:string)=>Promise<void> = async (newTagName:string) => {
        setTags((prev)=>new Set(prev).add(newTagName));
    };

    //Delete a tag
    const deleteTag:(removeTagName:string)=>Promise<void>= async (removeTagName:string)=>{
        let newSet = new Set(tags)
        newSet.delete(removeTagName);
        setTags(newSet);
    };

    return { tags,createTag, deleteTag};
}