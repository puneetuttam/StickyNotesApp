import React from "react";
import Trash from "../icons/Trash";
import { db } from "../appwrite/databases";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
const DeleteBtn = ({ noteID }) => {
    const {setNotes}=useContext(NoteContext);
    const handleDelete = async () => {
        db.notes.delete(noteID);
        setNotes((prevState) =>
            prevState.filter((note) => note.$id !== noteID)
        );
    };
    return (
        <div onClick={handleDelete}>
            <Trash />
        </div>
    );
};

export default DeleteBtn;
