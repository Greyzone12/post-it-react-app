import { useRef, useState } from "react"
import { Note } from "./Note"
import { v4 as uuid } from "uuid";

export const PostIt = () => {

    const [notes, setNotes] = useState([
        { id: uuid(), title: 'title 1', description: 'this is a description', important: true },
        { id: uuid(), title: 'title 2', description: 'this is a djsaodsasoaiption', important: false },
        { id: uuid(), title: 'title 3', description: 'this is hsa dhaoid asoidha s', important: true },
        { id: uuid(), title: 'title 4', description: 'this is jida i dap dpasdiption', important: true },
        { id: uuid(), title: 'title 5', description: 'dsadadasdsadasdion', important: false }
    ]);

    const [mensaje, setMensaje] = useState('');

    const titleRef = useRef();
    const descripRef = useRef();
    const importRef = useRef();

    const addNote = () => {
        const title = titleRef.current.value;
        const description = descripRef.current.value;
        const important = importRef.current.checked;

        if(title.trim() === '' || description.trim() === ''){
            setMensaje('Campos vacios');
            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return
        }

        const note = {
            id: uuid(),
            title: title,
            description: description,
            important: important
        }

        const newList = [...notes, note];

        setNotes(newList);

        titleRef.current.value = '';
        descripRef.current.value = '';
    }

    const deleteNote = (id) => {
        const newList = notes.filter(n => n.id != id);
        setNotes(newList);
    }

    return (
        <div className="container">
            <h1 className="text-center my-5">Post It!</h1>
            <div className="d-flex">
                <input ref={titleRef} className="form-control me-2" type="text" placeholder="Title" />
                <input ref={descripRef} className="form-control me-2" type="text" placeholder="Description" />
                <div className="form-check me-2">
                    <input ref={importRef} className="form-check-input" type="checkbox" />
                    <label className="form-check-label">
                        Important!
                    </label>
                </div>
                <button onClick={addNote} className="btn btn-success"><i className="bi bi-plus-circle"></i></button>
            </div>
            <div className="alert alert-danger" role="alert" hidden={!mensaje}>
                {mensaje}
            </div>
            <div className="box">
                {
                    notes.map(n => <Note note={n} deleteNote={deleteNote} key={n.id} />)
                }
            </div>
        </div>
    )
}