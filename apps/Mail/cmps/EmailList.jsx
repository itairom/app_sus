import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ mails,onDeleteMail,onSetRead }) {

    return (
        <div className ="mail-list">
            {mails.map((mail) => <EmailPreview  onSetRead={onSetRead} onDeleteMail={onDeleteMail} key={mail.id} mail={mail} />)}
        </div>
    )
}


