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
        countStarredMails: 0,
        filterBy: {
            search: '',
            read: false,
            star: false
        },
        sortBy: 'none',
        shownSideBar: false
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
    onCountStarredMails() {
        mailService.countUnreadMails()
            .then((countedMails) =>
                this.setState({ countUnreadMails: countedMails })
            )
    }

    loadMails = () => {
        const { search, read, star } = this.state.filterBy
        const { sortBy } = this.state

        mailService.query(search, read, sortBy, star)
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

    onSaveMail = (mail) => {
        mailService.saveMail(mail)
            .then(() => {
            }, this.loadMails())
        this.toggleCompose()
    }

    toggleRead = () => {
        this.setState(prevState => ({
            filterBy: {
                ...prevState.filterBy,
                read: !prevState.filterBy.read
            }
        }), this.loadMails)
    }


    toggleShowStared = () => {
        this.setState(prevState => ({
            filterBy: {
                ...prevState.filterBy,
                star: !prevState.filterBy.star
            }
        }), this.loadMails)
    }

    toggleShowInbox = () => {
        this.setState(prevState => ({
            filterBy: {
                ...prevState.filterBy,
                search: '',
                read: false,
                star: false
            }
        }), this.loadMails)
    }


    toggleSideBar = () => {
        this.setState({ shownSideBar: !this.state.shownSideBar })
    }

    onSetSort = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ sortBy: value }, this.loadMails) //console.log( this.state.sortBy))
    }
    onSaveReply = (reply) => {
        mailService.saveReply(reply)
            .then(() => {
                this.props.history.push('/mail')
            }, this.loadMails)
    }

    render() {
        if (!this.state.mails) return <h2>loading</h2>
        const { shownSideBar } = this.state
        return (
            <React.Fragment>
                <div className={shownSideBar ? 'side-bar-view' : 'side-bar'}>
                    <h1 onClick={() => { this.toggleCompose() }} className="add-btn">Compose</h1>
                    <div className="sidebar-filter">
                        <div className="seperator"></div>
                        <li onClick={() => this.toggleShowInbox()} className="flex">
                            <img src="apps/Mail/asset/svg/inbox.svg" />
                            Inbox</li>
                        <li onClick={() => this.toggleShowStared()}>
                            <img src="apps/Mail/asset/svg/star.svg" />
                             Starred</li>
                        <li onClick={() => this.toggleRead()}>
                            <img src="apps/Mail/asset/svg/envelope.svg" />
                            {this.state.countUnreadMails} Unread</li>
                        <li>
                            <img src="apps/Mail/asset/svg/letter.svg" />
                            Important</li>
                        <div className="seperator"></div>
                    </div>
                </div>

                <div className="main-container flex">

                    <section className="top-bar flex">

                        <img onClick={() => this.toggleSideBar()} className="menu-icon" src="assets/img/menu.svg" />
                        <EmailFilter onSetFilter={this.onSetFilter} />

                        <select className="sort-select" name="sort" value={this.state.sortBy} onChange={this.onSetSort}>
                            <option value="subject">Title</option>
                            <option value="sentAt">Date</option>
                        </select>

                        <div className="msg-count">1 - {this.state.mails.length} Of Messages</div>
                        <div className="date-coulm">Date</div>
                    </section>

                    <div className="main-mail flex" >
                        {/* <div className="toggle-read"></div> */}
                        {/* <div className="unread-counts">{this.state.countUnreadMails}</div> */}
                        <EmailList onCountStarredMails={this.onCountStarredMails} onSaveReply={this.onSaveReply} loadMails={this.loadMails} toggleStared={this.toggleStared} onSetRead={this.onSetRead} onDeleteMail={this.onDeleteMail} mails={this.state.mails} />
                    </div>
                </div>
                {(this.state.isCompose) && <EmailCompose toggleCompose={this.toggleCompose} onSaveMail={this.onSaveMail} />}
            </React.Fragment>
        )
    }
}
