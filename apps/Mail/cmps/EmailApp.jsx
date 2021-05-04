const { Route, Switch, Link } = ReactRouterDOM
// import React from 'react'
import { mailService } from '../services/mail-service.js'
import { EmailList } from './EmailList.jsx'
import { EmailCompose } from './EmailCompose.jsx'
import { EmailFilter } from './EmailFilter.jsx'

export class EmailApp extends React.Component {


    state = {
        mails: null,
        isCompose: false,
        filterBy: ''
    }

    componentDidMount() {
        this.loadMails()
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

    render() {
        if (!this.state.mails) return <h2>loading</h2>
        return (
            <React.Fragment>
                <EmailFilter filterBy={this.state.filterBy} />
                {(this.state.isCompose) && <EmailCompose />}
                {/* <h1 onClick={() => { this.toggleCompose() }} className="add-btn">
                    <Link to="/mail/compose">+ </Link>
                    </h1> */}
                <h1 onClick={() => { this.toggleCompose() }} className="add-btn">+</h1>
                <EmailList mails={this.state.mails} />
            </React.Fragment>
        )

    }

}
