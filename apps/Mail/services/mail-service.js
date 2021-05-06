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
    getMails
}
const KEY = 'mails'
let gMails;
_createMails()

function getMails() {
    return gMails
}

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
    return Promise.resolve(unreadCounts)
}

function _createMail(...args) {
}

function query(search, read, sort) {

    let readFilterd = gMails;
    if (read) {
        readFilterd = gMails.filter(mail => {
            return (mail.isRead === !read)
        })
    }
    // console.log(readFilterd);
    // console.log(readFilterd);
    readFilterd = sortBy(readFilterd, sort)
    // console.log(readFilterd);

    if (!search) {
        return Promise.resolve(readFilterd)
    }

    const searchFilterd = readFilterd.filter(mail => {
        return mail.subject.toLowerCase().includes(search.toLowerCase())
    })
    return Promise.resolve(searchFilterd)
}

function sortBy(mails, sort) {
    switch (sort) {
        case ('subject'): return mails.sort(sortByfilter('subject'))
        case ('sentAt'): return mails.sort(sortByfilter('sentAt','desc'))
        case ('none'): return mails
    }
}

function sortByfilter(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}










function saveReply(reply) {
    let idx = gMails.findIndex(mail => {
        return reply.mailId === mail.id
    })

    console.log(gMails[idx].replys);

    gMails[idx].replys.push(reply)
    console.log(gMails[idx].replys);

    _saveMailsToStorage
    return Promise.resolve(reply)
}

function saveMail(mail) {
    console.log(mail, 'mail');
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
    let mails = storageService.loadFromStorage(KEY)
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
        { id: utilService.makeId(), replys: [{ subject: 'we are always delighted to announce our latest innovative' }], subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [{ subject: 'The confirmation time for order 3009157721040698 has ended. If you still ' }], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [], subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [{ subject: 'we are always delighted to announce our latest innovative' }], subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [{ subject: 'The confirmation time for order 3009157721040698 has ended. If you still ' }], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [], subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [{ subject: 'we are always delighted to announce our latest innovative' }], subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [], subject: 'Wassaffp?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
        { id: utilService.makeId(), replys: [{ subject: 'The confirmation time for order 3009157721040698 has ended. If you still ' }], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551133930594 }
    ]
}

// function sortByfilter(arr, sortBy) {
//     console.log(arr);
//     // switch (sortBy){

//     //     case('name') return 
//     // }

//     arr.sort((a, b) => {
//         var subjectA = a.sortBy.toUpperCase();
//         var subjectB = b.sortBy.toUpperCase();
//         if (subjectA > subjectB) {
//             return -1;
//         }
//         if (subjectA < subjectB) {
//             return 1;
//         }
//         // names must be equal
//         return 0;
//     })

//     return arr
// }