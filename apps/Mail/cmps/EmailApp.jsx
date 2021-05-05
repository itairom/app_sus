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
            read: true
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
        })

            , this.loadMails)
    }

    onDeleteMail = (mailId) => {
        mailService.deleteMailById(mailId)
            .then(() => {
                this.props.history.push('/mail')
            }, this.loadMails())
    }

    onSaveMail = (mail,ev) => {
        ev.preventDefault()
        mailService.saveMail(mail)
            .then(() => {
                this.props.history.push('/mail')
            }, this.loadMails())
    }

    onSaveReplay = (replay) => {
        mailService.saveReplay(replay)
            .then(() => {
                // this.props.history.push('/mail')
            }, this.loadMails())
    }

    // toggleLine = () => {
    //     this.setState({ isCrossed: !this.state.isCrossed })
    // }

    render() {
        if (!this.state.mails) return <h2>loading</h2>
        return (
            <React.Fragment>
                <h1 onClick={() => { this.toggleCompose() }}  className="add-btn">Compose</h1>
                <div className="main-mail" >
                    <div className="unread-counts">{this.state.countUnreadMails}</div>
                    <EmailFilter onSetFilter={this.onSetFilter} />
                    {(this.state.isCompose) && <EmailCompose toggleCompose={this.toggleCompose} onSaveMail={this.onSaveMail} />}
                    <EmailList onSetRead={this.onSetRead} onSaveReplay={this.onSaveReplay} onDeleteMail={this.onDeleteMail} mails={this.state.mails} />

                </div>
            </React.Fragment>
        )
    }
}
