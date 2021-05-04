import { EmailApp} from './cmps/EmailApp.jsx'
import { } from './cmps/EmailDetails.jsx'
import { } from './cmps/EmailFilter.jsx'
import { } from './cmps/EmailList.jsx'
import { } from './cmps/EmailStatus.jsx'
import { EmailPreview} from './cmps/EmailPreview.jsx'


export class MailApp extends React.Component {

    state = {

    }

    componentDidMount() {

    }



    render() {

        return (
            <section className="main-mail">
                <h1>Inbox</h1>
                <EmailApp />

            </section>
        )
    }
}
