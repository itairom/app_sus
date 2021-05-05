const { Route, Switch, Link } = ReactRouterDOM
// import React from 'react'
import { mailService } from '../services/mail-service.js'
import { EmailList } from './EmailList.jsx'
import { EmailCompose } from './EmailCompose.jsx'
import { EmailFilter } from './EmailFilter.jsx'
import { EmailFilter } from './EmailFilter.jsx'

export class EmailApp extends React.Component {


    state = {
        mails: null,
        isCompose: false,
        filterBy: '',
        countUnreadMails: 0
    }

    componentDidMount() {
        this.loadMails()
    }

    onCountUnreadMails() {

        mailService.countUnreadMails()
            .then()
    }


    loadMails = () => {
        mailService.query(this.state.filterBy)
            .then(mails => {
                this.setState({ mails })
            })
    }

    toggleCompose = () => {
        this.setState({ isCompose: !this.state.isCompose })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }

    onDeleteMail = (mailId) => {
        console.log(mailId);
        mailService.deleteMailById(mailId)
            .then(() => {
                this.props.history.push('/mail')
            }, this.loadMails())
    }

    onSaveMail = (mail) => {
        event.preventDefault()
        console.log(mail);
        mailService.saveMail(mail)
            .then(() => {
                this.props.history.push('/mail')
            }, this.loadMails())
    }

    onSaveReplay = (replay) => {
        event.preventDefault()
        console.log(replay);
        mailService.saveReplay(replay)
            .then(() => {
                // this.props.history.push('/mail')
            }, this.loadMails())
    }

    render() {
        if (!this.state.mails) return <h2>loading</h2>
        return (
            <React.Fragment>

                <EmailFilter onSetFilter={this.onSetFilter} />
                {(this.state.isCompose) && <EmailCompose onSaveMail={this.onSaveMail} />}
                {/* <h1 onClick={() => { this.toggleCompose() }} className="add-btn">
                    <Link to="/mail/compose">+ </Link>
                    </h1> */}
                <h1 onClick={() => { this.toggleCompose() }} className="add-btn">+</h1>
                <EmailList onSaveReplay={this.onSaveReplay} onDeleteMail={this.onDeleteMail} mails={this.state.mails} />
            </React.Fragment>
        )

    }

}
