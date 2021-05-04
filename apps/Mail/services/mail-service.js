import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'


export const mailService = {
    query,
    getMailById,
    deleteMailById,
    _saveMail,
    _createMail
}

let gMails = [
    { id: utilService.makeId, subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId, subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId, subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId, subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551133930594 },
]

function _createMail(...args) {
    console.log(args);
}

function query(filterBy) {
    if (!filterBy) return Promise.resolve(gMails)
    const filteredMails = gMails.filter(mail => {
        return mail.subject.toLowerCase().includes(filterBy.toLowerCase())
    })
    return Promise.resolve(filteredMails)


}

function _saveMail(mail) {
    console.log(mail);
    gMails.unshift(mail)

    console.log(gMails);
    return Promise.resolve(mail)
}


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



