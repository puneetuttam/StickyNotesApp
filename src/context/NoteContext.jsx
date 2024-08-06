import { createContext, useEffect, useState } from "react";
import Spinner from "../icons/Spinner";
import { db } from "../appwrite/databases";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    const [loading, setLoading] = useState(true);
    const init = async () => {
        const res = await db.notes.list();
        setNotes(res.documents);
        setLoading(false)
    };
    useEffect(() => {
        init();
    }, []);
    const contextData = {notes,setNotes};
    return (
        <NoteContext.Provider value={contextData}>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <Spinner size="100" />
                </div>
            ) : (
                children
            )}
        </NoteContext.Provider>
    );
};

export default NoteProvider;
