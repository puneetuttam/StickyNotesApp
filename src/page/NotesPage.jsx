import React, { useEffect, useState } from "react";
// import { fakeData as notes } from "../assets/fakeData";
import NoteCard from "../components/NoteCard";
import { databases } from "../appwrite/config";
import { db } from "../appwrite/databases";
const NotesPage = () => {
    const [notes, setNotes] = useState([]);
    useEffect(()=>{init()},[] )
    const init = async () => {
        
        // const res=await databases.listDocuments(
        //     import.meta.env.VITE_DATABASE_ID,
        //     import.meta.env.VITE_COLLECTION_NOTES_ID
        // );

        const res=await db.notes.list();
        setNotes(res.documents)
    };
    return (
        <div>
            {notes.map((note) => (
                <NoteCard key={note.$id} note={note} />
            ))}
        </div>
    );
};

export default NotesPage;
