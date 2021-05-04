import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'


export const mailService = {
    query,
    getMailById,
    deleteMailById
}

let gMails = [
    { id: utilService.makeId, subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId, subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId, subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId, subject: 'asdsdsdsdsd?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
]

function query(filterBy) {
    if (filterBy) {

    }

    return Promise.resolve(gMails)
}

function _saveMail(mail) {
    gMails.unshift(mail)
    return Promise.resolve(mail)

    function deleteMailById(mailId) {
        let mailIdx = gMails.findIndex(mail => {
            return mailId === mail.id
        })
        gMails.splice(mailIdx, 1)
        return Promise.resolve()
    }

    function getMailById(mailId) {
        let currMail = gMails.find(mail => {
            return mailId === mail.id
        })
        return Promise.resolve(currMail)
    }



