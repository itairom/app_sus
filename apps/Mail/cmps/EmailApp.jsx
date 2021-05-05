const { Route, Switch, Link } = ReactRouterDOM
import { mailService } from '../services/mail-service.js'
import { EmailList } from './EmailList.jsx'
import { EmailCompose } from './EmailCompose.jsx'
import { EmailFilter } from './EmailFilter.jsx'

export class EmailApp extends React.Component {

    state = {
        mails: null,
        isCompose: false,
        countUnreadMails: 0,
        filterBy: {
            search: '',
            read: false
        }
    }

    componentDidMount() {
        this.loadMails()
        this.onCountUnreadMails()
    }

    onSetRead = (mailId) => {
        mailService.setRead(mailId)
            .then(() => { }, this.loadMails())
    }

    onCountUnreadMails() {
        mailService.countUnreadMails()
            .then((countedMails) =>
                this.setState({ countUnreadMails: countedMails })
            )
    }

    loadMails = () => {
        const { search, read } = this.state.filterBy
        mailService.query(search, read)
            .then(mails => {
                this.setState({ mails })
            }).then(() => this.onCountUnreadMails())
    }

    toggleCompose = () => {
        this.setState({ isCompose: !this.state.isCompose })
    }

    onSetFilter = (search) => {
        this.setState(prevState => ({
            filterBy: {
                ...prevState.filterBy,
                search
            }
        }), this.loadMails)
    }

    onDeleteMail = (mailId) => {
        mailService.deleteMailById(mailId)
            .then(() => {
                this.props.history.push('/mail')
            }, this.loadMails())
    }

    onSaveMail = (mail, ev) => {
        ev.stopPropagation()
        ev.preventDefault()

        console.log('d');
        mailService.saveMail(mail)
            .then(() => {
                // this.props.history.push('/mail')
            }, this.loadMails())
    }

    onSaveReply = (reply) => {
        mailService.saveReply(reply)
            .then(() => {
                // this.props.history.push('/mail')
            }, this.loadMails())
    }

    // toggleLine = () => {
    //     this.setState({ isCrossed: !this.state.isCrossed })
    // }

    toggleRead = () => {
        this.setState(prevState => ({
            filterBy: {
                ...prevState.filterBy,
                read: !prevState.filterBy.read
            }
        }),this.loadMails)
    }

    render() {
        if (!this.state.mails) return <h2>loading</h2>
        console.log('render');
        return (
            <React.Fragment>

                <form>
                    <label>
                        Unread:
                    <input
                            name="toggleUnread"
                            type="checkbox"
                            checked={this.state.filterBy.read}
                            onChange={() => this.toggleRead()} />
                    </label>
                </form>


                <h1 onClick={() => { this.toggleCompose() }} className="add-btn">Compose</h1>
                <div className="main-mail" >
                    {/* <div className="toggle-read"></div> */}

                    <div className="unread-counts">{this.state.countUnreadMails}</div>
                    <EmailFilter onSetFilter={this.onSetFilter} />
                    {(this.state.isCompose) && <EmailCompose toggleCompose={this.toggleCompose} onSaveMail={this.onSaveMail} />}
                    <EmailList onSetRead={this.onSetRead} onSaveReply={this.onSaveReply} onDeleteMail={this.onDeleteMail} mails={this.state.mails} />
                </div>
            </React.Fragment>
        )
    }
}
