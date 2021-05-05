import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ mails,onDeleteMail,onSaveReply,onSetRead }) {

    return (
        <div className ="mail-list">
            {mails.map((mail) => <EmailPreview  onSetRead={onSetRead} onSaveReply={onSaveReply} onDeleteMail={onDeleteMail} key={mail.id} mail={mail} />)}
        </div>
    )
}


