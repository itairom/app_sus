import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ mails,onDeleteMail,onSaveReplay }) {

    return (
        <div mail-list>
            {mails.map((mail) => <EmailPreview onSaveReplay={onSaveReplay} onDeleteMail={onDeleteMail} key={mail.id} mail={mail} />)}
        </div>

    )

}


