import './Note.css'
import * as notesAPI from '../../utilities/notes-api';

export default function Note({ note, index, setNotes }) {

    function formatDate(dateTimeString) {
        const date = new Date(dateTimeString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    async function handleDelete() {
        console.log(note._id)
        await notesAPI.deleteNote(note._id);
        const updatedNotes = await notesAPI.getAll();
        setNotes(updatedNotes);
    };


    return (
        <li>
            <div className='Note'>
                <h1>{note.name}</h1>
                <p>Created at: {formatDate(note.createdAt)}</p>
                <button className='ED'>Edit</button>
                <button className='ED' onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
}