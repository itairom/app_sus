import { storageService } from '../../../services/storage-service.js'


export const mailService = {
    query,
}

let gMails = [
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
    { subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
    { subject: 'asdsdsdsdsd?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
]

function query(filterBy) {
    if (filterBy) {

    }

    return Promise.resolve(gMails)
}




