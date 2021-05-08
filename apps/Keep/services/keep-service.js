import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

let gNotes;
const KEY = 'notes'
_createNotes()

export const KeepService = {
    query,
    addNote,
    updateNote,
    deleteNote,
    pinnNote,
    changeBgc
}

function query(filterBy) {
    const { type, txt, isPinned } = filterBy
    if (!txt && type === 'All') return Promise.resolve(gNotes)
    const filterNotes = gNotes.filter(note => {
        const field = note.type === 'NoteTxt' ? 'txt' : 'title'
        return (
            (note.info[field].toLowerCase().includes(txt.toLowerCase())) &&
            (type === 'All' ? true : note.type === type)
        )
    })

    return Promise.resolve(filterNotes)
}



function addNote(noteToAdd) {
    noteToAdd.id = utilService.makeId()
    gNotes.unshift(noteToAdd)
    _saveNotesToStorage();
    return Promise.resolve(noteToAdd)
}

function updateNote(noteToUpdate) {
    var noteIdx = gNotes.findIndex((note) => {
        return note.id === noteToUpdate.id;
    })
    gNotes.splice(noteIdx, 1, noteToUpdate)
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex((note) => {
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
    gNotes = JSON.parse(JSON.stringify(notes))
    _saveNotesToStorage();

}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}

function pinnNote(noteId) {
    let foundNote = _getNoteById(noteId)
    foundNote.isPinned = true
    let notesToEdit = gNotes.filter(note => noteId !== note.id)
    notesToEdit.unshift(foundNote)
    gNotes = JSON.parse(JSON.stringify(notesToEdit))
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function _getNoteById(noteId) {
    var note = gNotes.find(note => noteId === note.id)
    return note
}

function changeBgc(noteId,color){
    let foundNote = _getNoteById(noteId)
    foundNote.style.backgroundColor = color;
    updateNote(foundNote) 
}

function _defaultNotes() {

    return [
        {
            id: utilService.makeId(),
            type: "NoteTxt",
            isPinned: false,
            info: {
                txt: "The best proj ever!! 🤪🔥"
            },
            style: {
                backgroundColor: "#fbbc04"
            }
        },

        {
            id: utilService.makeId(),
            type: "NoteImg",
            isPinned: false,
            info: {
                url: "https://cdn.pixabay.com/photo/2016/02/22/10/06/hedgehog-1215140_960_720.jpg",
                title: "Sooo cute!😍",
            },
            style: {
                backgroundColor: "#aecbfa"
            }
        },

        {
            id: utilService.makeId(),
            type: "NoteTodos",
            isPinned: false,
            info: {
                title: "ToDos",
                todos: [
                    { txt: "Sleep", doneAt: null },
                    { txt: "Study", doneAt: Date.now() }
                ]
            },
            style: {
                backgroundColor: "#d7aefb"
            }
        },

        {
            id: utilService.makeId(),
            type: "NoteVideo",
            isPinned: false,
            info: {
                url: "https://www.youtube.com/embed/5qap5aO4i9A",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#f28b82"
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteImg",
            isPinned: false,
            info: {
                url: "https://images.pexels.com/photos/7678410/pexels-photo-7678410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                title: "My dog..💩"
            },
            style: {
                backgroundColor: "#fdcfe8"
            }
        },
    ];

}
