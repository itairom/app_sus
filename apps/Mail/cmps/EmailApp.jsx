// import React from 'react'
import { mailService } from '../services/mail-service.js'
import { EmailList } from './EmailList.jsx'
import { EmailCompose } from './EmailCompose.jsx'

export class EmailApp extends React.Component {


    state = {
        mails: null,
        isCompose: false
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

    toggleCompose = () => {
        this.setState({ isCompose: !this.state.isCompose })
    }

    render() {
        if (!this.state.mails) return <h2>loading</h2>
        return (
            <React.Fragment>
                {(this.state.isCompose) && <EmailCompose />}
                <h1 onClick={() => { this.toggleCompose() }} className="add-btn">+</h1>
                <EmailList mails={this.state.mails} />
            </React.Fragment>
        )

    }

}
