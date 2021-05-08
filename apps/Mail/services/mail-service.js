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
    getMails,
    setStarred,countStarred
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

function setStarred(mailId) {
    let mailIdx = gMails.findIndex(mail => {
        return mailId === mail.id
    })
    gMails[mailIdx].isStarred = true

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
function countStarred() {
    let starredCounts = 0
    for (const mail of gMails) {
        mail.isStarred ? starredCounts++ : ''
    }
    return Promise.resolve(starredCounts)
}

function _createMail(...args) {
}

function query(search, read, sort, star) {

    let filterdBy = gMails;

    if (star) {
        filterdBy = gMails.filter(mail => {
            return (mail.isStarred === star)
        })
    }

    if (read) {
        filterdBy = gMails.filter(mail => {
            return (mail.isRead === !read)
        })
    }

    filterdBy = sortBy(filterdBy, sort)

    if (!search) {
        return Promise.resolve(filterdBy)
    }

    const searchFilterd = filterdBy.filter(mail => {
        return mail.subject.toLowerCase().includes(search.toLowerCase())
    })
    return Promise.resolve(searchFilterd)
}

function sortBy(mails, sort) {
    switch (sort) {
        case ('subject'): return mails.sort(sortByfilter('subject'))
        case ('sentAt'): return mails.sort(sortByfilter('sentAt', 'desc'))
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
    let mails = storageService.loadFromStorage(KEY)
    if (!mails || !mails.length) {
        mails = _getDefualtValues()
    }
    gMails = [...mails]
    _saveMailsToStorage();
}
function _saveMailsToStorage() {
    storageService.saveToStorage(KEY, gMails)
}
// storageService.loadFromStorage(KEY, gMails)

function _getDefualtValues() {
    return [
        { id: utilService.makeId(),img: 'apps/Mail/asset/img/zapsplat.jpeg', isStarred: false, replys: [{ subject: 'we are always delighted to announce our latest innovative' }], subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930514 },
        { id: utilService.makeId(),img: 'apps/Mail/asset/img/ufo.jpeg', isStarred: false, replys: [{ subject: 'The confirmation time for order 3009157721040698 has ended. If you still ' }], subject: 'How the Pentagon Started Taking U.F.O.s Seriously', body: 'What Home Staging Showed Me About Housing in America. The Secret History of Women in Electronic Music Is Just Beginning to Be Told', isRead: false, sentAt: 1551133930594 },
        { id: utilService.makeId(),img: 'apps/Mail/asset/img/duo.jpeg', isStarred: false, replys: [], subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930544 },
        { id: utilService.makeId(),img: false, isStarred: false, replys: [{ subject: 'we are always delighted to announce our latest innovative' }], subject: 'Americas #1 Lawn Care Company - Request Your Free Lawn Care Quote Today', body: 'TruGreen is the nations largest lawcare provider, serving millions ofAmerican homeowners, isRead: true, sentAt: 1551123430594 }', isRead: false, sentAt: 155113393094 },
        { id: utilService.makeId(),img: 'apps/Mail/asset/img/codepen.png', isStarred: false, replys: [{ subject: 'The confirmation time for order 3009157721040698 has ended. If you still ' }], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 155113493094 },
        { id: utilService.makeId(),img:'apps/Mail/asset/img/dou.png' , isStarred: false, replys: [], subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 155113393014 },
        { id: utilService.makeId(),img: false, isStarred: false, replys: [{ subject: 'we are always delighted to announce our latest innovative' }], subject: 'Spring is here! Get affordable auto insurance with GEICO!', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 155113330594 },
        { id: utilService.makeId(),img:false , isStarred: false, replys: [], subject: 'Wassap body, Are you coming to the party?? ', body: 'Pick up the phone!', isRead: false, sentAt: 15511339305941 },
        { id: utilService.makeId(),img: false, isStarred: false, replys: [{ subject: 'The confirmation time for order 3009157721040698 has ended. If you still ' }], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551033933594 }
    ]
}
