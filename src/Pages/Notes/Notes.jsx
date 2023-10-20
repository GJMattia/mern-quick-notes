import { useState, useEffect } from 'react';
import './Notes.css'
import * as notesAPI from '../../utilities/notes-api';
import NoteList from '../../Components/NoteList/NoteList.jsx'



export default function Notes() {

    const [input, setInput] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(function () {
        async function getNotes() {
            try {
                const notes = await notesAPI.getAll();
                setNotes(notes);
                console.log(notes);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        }
        getNotes();
    }, []);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    async function addNote() {
        try {
            await notesAPI.createNote({ name: input });
            setInput('')
            const updatedNotes = await notesAPI.getAll();
            setNotes(updatedNotes);
        } catch (error) {
            console.error('error creating note', error);
        }
    };

    return (
        <div className='NoteDiv'>
            <h1>Notes!</h1>
            <input type='text' value={input} onChange={handleInputChange} />
            <button onClick={addNote}>Add Note</button>
            <NoteList notes={notes} setNotes={setNotes} />
        </div>
    )
}