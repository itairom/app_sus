import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'

export const KeepService = {
    query
}

function query() {
    return Promise.resolve(gNotes)
}



var gNotes = [
    {
        id:utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },

    {
        id:utilService.makeId(),
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },

    {
        id:utilService.makeId(),
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
        id:utilService.makeId(),
        type: "NoteVideo",
        info: {
            txt: "note-video"  
        }
    }
];
