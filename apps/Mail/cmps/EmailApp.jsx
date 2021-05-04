import { mailService } from '../services/mail-service.js'
// import { } from './'
import { EmailList } from './EmailList.jsx'

export class EmailApp extends React.Component {


    state = {
        mails: null
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query()
            .then(mails => {
                this.setState({ mails })
            })
    }

    render() {
        if (!this.state.mails) return <h2>loading</h2>
        return (
            <EmailList mails={this.state.mails} />

        )

    }

}
