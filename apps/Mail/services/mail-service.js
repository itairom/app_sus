import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'
let gSortBy = ''

export const mailService = {
    query,
    getMailById,
    deleteMailById,
    saveMail,
    _createMail,
    saveReplay,
    countUnreadMails
}

let gMails = [
    { id: utilService.makeId(), replays: [], subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), replays: [], subject: 'Keep Duo happy with a lesson!', body: 'yo yo!', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId(), replays: [], subject: 'Your ZapSplat login details?', body: 'Hello and thanks for joining ZapSplat. Your account username: gfgfdsdsds. You can now login at https://www.zapsplat.com/login. Thanks and we hope you enjoy our sounds and music.!', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId(), replays: [], subject: 'The CodePen Spark: Animated Tooltips, Cut Paper Text, and Interactive Kittens?', body: 'Pick up! Animated Tooltips, Cut Paper Text, and Interactive Kittens', isRead: false, sentAt: 1551133930594 },
]

// function getSortBy(sortBy) {
//     gSortBy = sortBy
// }

function countUnreadMails() {
    let unreadCounts = 0
    for (const mail of gMails) {
        mail.isRead ? '' : unreadCounts++
    }
    return Promise.resolve(unreadCounts)
}

function _createMail(...args) {
}

function query(search, read) {
    let readFilterd;
    if (read) {
         readFilterd = gMails.map(mail => {
            return mail.isRead===read  })
    }

    console.log(readFilterd);

    if (!search) return Promise.resolve(gMails)
    // gMails.sort((a, b) => a.subject.toLowerCase() - b.subject.toLowerCase())


    const filteredMails = gMails.filter(mail => {
        return mail.subject.toLowerCase().includes(search.toLowerCase())
    })


    return Promise.resolve(filteredMails)
}



function saveReplay(replay) {
    // let idx = replay.mailId
    let idx = gMails.findIndex(mail => {
        return replay.mailId === mail.id
    })
    gMails[idx].replays.push(replay)
    return Promise.resolve(replay)
}

function saveMail(mail) {
    gMails.unshift(mail)

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



