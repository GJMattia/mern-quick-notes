import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
    return sendRequest(BASE_URL);
};

export async function createNote(noteData) {
    try {
        await sendRequest(`${BASE_URL}`, 'POST', noteData);
    } catch (error) {
        console.error('Error creating note:', error);
    }
};

export async function deleteNote(noteID) {
    try {
        await sendRequest(`${BASE_URL}/${noteID}`, 'DELETE');
    } catch (error) {
        console.error('error deleting note:', error);
    }
};

