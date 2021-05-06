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
        },
        sortBy: 'none'
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
        const { sortBy } = this.state

        mailService.query(search, read, sortBy)
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

    onSetSort = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ sortBy: value }, this.loadMails) //console.log( this.state.sortBy))
    }

    render() {
        if (!this.state.mails) return <h2>loading</h2>
        let arr = mailService.getMails()
        console.log(this.state.sortBy);
        return (
            <React.Fragment>
                <div className="side-bar">
                    <h1 onClick={() => { this.toggleCompose() }} className="add-btn">Compose</h1>
                </div>




                <div className="main-container flex">

                    <section className="top-bar flex">
                        <EmailFilter onSetFilter={this.onSetFilter} />
                        <img src="apps/Mail/asset/img/info.png"  />
                        <img src="apps/Mail/asset/img/settings.png"  />
                        <img src="apps/Mail/asset/img/apps.png"  />
                    </section>

                    <section className=" bottom-bar flex">
                        <select className="sort-select" name="sort" value={this.state.sortBy} onChange={this.onSetSort}>
                            <option value="subject">Title</option>
                            <option value="sentAt">Date</option>
                        </select>

                        <form className="toggle-unread">
                            <label>
                                Unread:
                    <input
                                    name="toggleUnread"
                                    type="checkbox"
                                    checked={this.state.filterBy.read}
                                    onChange={() => this.toggleRead()} />
                            </label>
                        </form>

                    <div className="msg-count">1 - {this.state.mails.length} Of Messages</div>

                    </section>


                    <div className="main-mail flex" >
                        {/* <div className="toggle-read"></div> */}
                        <div className="unread-counts">{this.state.countUnreadMails}</div>
                        <EmailList onSetRead={this.onSetRead} onDeleteMail={this.onDeleteMail} mails={this.state.mails} />
                    </div>
                </div>
                {(this.state.isCompose) && <EmailCompose toggleCompose={this.toggleCompose} onSaveMail={this.onSaveMail} />}
            </React.Fragment>
        )
    }
}
