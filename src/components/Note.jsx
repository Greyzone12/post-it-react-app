export const Note = ({ note, deleteNote }) => {
    const { id, title, description, important } = note;

    const removeNote = () => deleteNote(id);

    if (important) {
        return (
            <div className="card important">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title">{title}</h5>
                        <button onClick={removeNote} className="btn"><i className="bi bi-x"></i></button>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="card no-important">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title">{title}</h5>
                        <button onClick={removeNote} className="btn"><i className="bi bi-x"></i></button>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        )
    }
}