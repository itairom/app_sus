import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ mails }) {
console.log(mails);


    return (
        <div mail-list>
            {mails.map((mail) => <EmailPreview mail={mail} />)}
        </div>

    )

}


