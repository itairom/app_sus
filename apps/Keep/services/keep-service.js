import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

let gNotes;
const KEY = 'notes'
_createNotes()

export const KeepService = {
    query,
    addNote,
    updateNote,
    deleteNote
}

function query(filterBy) {
    const { type, txt, isPinned } = filterBy
    if (!txt && type === 'All') return Promise.resolve(gNotes)
    const filterNotes = gNotes.filter(note => {
        const field = note.type === 'NoteTxt' ? 'txt' : 'title'
        return (
            (note.info[field].toLowerCase().includes(txt.toLowerCase())) &&
            (type !== 'All' ? note.type === type : true)
        )
    })

    return Promise.resolve(filterNotes)
}


function addNote(noteToAdd) {
    noteToAdd.id = utilService.makeId()
    console.log(noteToAdd);
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
                txt: "The best proj ever!! 🤪🔥"
            }
        },

        {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                url: "https://cdn.pixabay.com/photo/2016/02/22/10/06/hedgehog-1215140_960_720.jpg",
                title: "Sooo cute!😍",
                // txt: ''
            },
            style: {
                backgroundColor: "#00d"
            }
        },

        {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                title: "ToDos",
                todos: [
                    { txt: "Sleep", doneAt: null },
                    { txt: "Study", doneAt: Date.now() }
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
                title: "My dog..💩"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
    ];

}
