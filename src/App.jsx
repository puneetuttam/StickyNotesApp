import NotesPage from "./page/NotesPage";
import NoteProvider from "./context/NoteContext";

function App() {
    return (
        <div id="app">
            <NoteProvider>
                <NotesPage />
            </NoteProvider>
        </div>
    );
}

export default App;
