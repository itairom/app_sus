import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

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
    gNotes.unshift(noteToAdd)
    // _saveNotesToStorage();
    return Promise.resolve(noteToAdd)
}

function _updateNote(noteToUpdate) {
    var noteIdx = gNotes.findIndex(function (note) {
        return note.id === noteToUpdate.id;
    })
    gNotes.splice(noteIdx, 1, noteToUpdate)
    // _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex(function (note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    // _saveNotesToStorage();

    return Promise.resolve()
}


var gNotes = [
    {
        id: utilService.makeId(),
        type: "NoteText",
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
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteVideo",
        info: {
            txt: "note-video"
        }
    }
];
