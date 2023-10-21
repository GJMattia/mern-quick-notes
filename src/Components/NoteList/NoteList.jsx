import './NoteList.css'
import Note from '../Note/Note'

export default function NoteList({ notes, setNotes }) {

    const Notes = notes.map((note, index) => (
        <Note note={note} setNotes={setNotes} index={index} key={index} />
    ));

    return (
        <ul className='NoteList'>
            {Notes.length === 0 ? (
                <li>There are currently no notes!</li>
            ) : (
                Notes
            )}
        </ul>
    )
}