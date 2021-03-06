import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ mails,onDeleteMail,onSetRead,toggleStared,onSaveReply,onCountStarredMails }) {

    return (
        <div className ="mail-list">
            {mails.map((mail) => <EmailPreview onCountStarredMails={onCountStarredMails} onSaveReply={onSaveReply} onSetRead={onSetRead} onDeleteMail={onDeleteMail} key={mail.id} mail={mail} />)}
        </div>
    )
}


