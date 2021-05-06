import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

let gNotes;
const KEY = 'notes'
_createNotes()

export const KeepService = {
    query,
    getNoteById,
    // saveNote
    _addNote,
    _updateNote,
    deleteNote
}

function query() {
    return Promise.resolve(gNotes)
}

function getNoteById(NoteId) {
    var note = gNotes.find(function (note) {
        return noteId === note.id
    })
    return Promise.resolve(note)
}

function saveNote(note) {
    return note.id ? _updateNote(note) : _addNote(note)
}

function _addNote(noteToAdd) {
    noteToAdd.id = utilService.makeId()
    console.log(noteToAdd);
    gNotes.unshift(noteToAdd)
    _saveNotesToStorage();
    return Promise.resolve(noteToAdd)
}

function _updateNote(noteToUpdate) {
    var noteIdx = gNotes.findIndex((note)=> {
        return note.id === noteToUpdate.id;
    })
    gNotes.splice(noteIdx, 1, noteToUpdate)
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex((note)=> {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage();

    return Promise.resolve()
}


function _createNotes() {
    var notes = storageService.loadFromStorage(KEY)
    if (!notes || !notes.length) {
        notes = _defaultNotes()
    }
    gNotes = notes
    _saveNotesToStorage();
    
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}

function _defaultNotes() {

    return [
        {
            id: utilService.makeId(),
            type: "NoteTxt",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },

        {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                url: "https://cdn.pixabay.com/photo/2016/02/22/10/06/hedgehog-1215140_960_720.jpg",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },

        {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                label: "ToDos",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: Date.now() }
                ]
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteVideo",
            info: {
                src: "https://www.youtube.com/watch?v=tAe2Q_LhY8g",
                title: "Me playing Mi"
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                url: "https://images.pexels.com/photos/7678410/pexels-photo-7678410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
    ];

}
