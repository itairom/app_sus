import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ mails,onDeleteMail,onSaveReplay,onSetRead }) {

    return (
        <div className ="mail-list">
            {mails.map((mail) => <EmailPreview  onSetRead={onSetRead} onSaveReplay={onSaveReplay} onDeleteMail={onDeleteMail} key={mail.id} mail={mail} />)}
        </div>

    )

}


