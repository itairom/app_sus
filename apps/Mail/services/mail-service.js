import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'
let gSortBy = ''

export const mailService = {
    query,
    getMailById,
    deleteMailById,
    saveMail,
    _createMail,
    saveReply,
    countUnreadMails,
    _getDefualtValues,
    setRead,
}

const KEY = 'mails'
let gMails;

_createMails()

function setRead(mailId) {
    let mailIdx = gMails.findIndex(mail => {
        return mailId === mail.id
    })
    gMails[mailIdx].isRead = true
    _saveMailsToStorage
    return Promise.resolve(mailId)
}

function countUnreadMails() {
    let unreadCounts = 0
    for (const mail of gMails) {
        mail.isRead ? '' : unreadCounts++
    }
    _saveMailsToStorage
    return Promise.resolve(unreadCounts)
}

function _createMail(...args) {
}

function query(search, read) {

    let readFilterd =gMails;
    if (read) {
         readFilterd = gMails.filter(mail => {
            return mail.isRead===!read  })
    }
// console.log(readFilterd);

    _saveMailsToStorage
    if (!search) {        
        return Promise.resolve(readFilterd)
    }
    // gMails.sort((a, b) => a.subject.toLowerCase() - b.subject.toLowerCase())

    const searchFilterd = readFilterd.filter(mail => {
        return mail.subject.toLowerCase().includes(search.toLowerCase())
    })
    _saveMailsToStorage
    return Promise.resolve(searchFilterd)
}

function saveReply(reply) {
    // let idx = reply.mailId
    let idx = gMails.findIndex(mail => {
        return reply.mailId === mail.id
    })
    gMails[idx].replys.push(reply)
    _saveMailsToStorage
    return Promise.resolve(reply)
}

function saveMail(mail) {
    gMails.unshift(mail)
    _saveMailsToStorage
    return Promise.resolve(mail)
}


function deleteMailById(mailId) {
    let mailIdx = gMails.findIndex(mail => {
        return mailId === mail.id
    })
    gMails.splice(mailIdx, 1)
    _saveMailsToStorage
    return Promise.resolve()
}

function getMailById(mailId) {
    let currMail = gMails.find(mail => {
        return mailId === mail.id
    })
    _saveMailsToStorage
    return Promise.resolve(currMail)
}

function _createMails() {
    var mails = storageService.loadFromStorage(KEY)
    if (!mails || !mails.length) {
        mails = _getDefualtValues()
    }
    gMails = mails
    _saveMailsToStorage();


}
function _saveMailsToStorage() {
    storageService.saveToStorage(KEY, gMails)

}
// storageService.loadFromStorage(KEY, gMails)

function _getDefualtValues() {
    return [
        { id: utilService.makeId(), replys: ['we are always delighted to announce our latest innovative'], subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: ['The confirmation time for order 3009157721040698 has ended. If you still '], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [], subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: ['we are always delighted to announce our latest innovative'], subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: ['The confirmation time for order 3009157721040698 has ended. If you still '], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [], subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: ['we are always delighted to announce our latest innovative'], subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replas: [], subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: ['The confirmation time for order 3009157721040698 has ended. If you still '], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551133930594 }
    ]
}