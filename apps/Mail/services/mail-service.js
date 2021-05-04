import { storageService } from '../../../services/storage-service.js'


export const mailService = {
    query,
}

let gMails = [
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { subject: 'ldsdsdsdsaca?', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
    { subject: 'gool?', body: 'dsds up!', isRead: true, sentAt: 1551133930594 },
    { subject: 'asdsdsdsdsd?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
]

function query(filterBy) {
    if (filterBy) {

    }

    return Promise.resolve(gMails)
}




