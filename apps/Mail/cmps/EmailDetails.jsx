// import React from "react";
import { mailService } from '../services/mail-service.js'
import { EmailReplaySubmit } from './EmailReplaySubmit.jsx'
import { EmailReplayList } from './EmailReplayList.jsx'


export class EmailDetails extends React.Component {

    state = {
        mail: null,
        isClicked: null,
        isReplay: false
    }
    componentDidMount() {
        this.setState({ mail: this.props.mail })
    }

    toggleReplay = () => {
        event.stopPropagation()
        this.setState((prevState) => {
            return { isReplay: !prevState.iisReplay }
        })
    }

    render() {

        if (!this.state.mail) return <h2>loading2</h2>

        const { subject, body, isRead, id, replays } = this.state.mail

        return (
            <React.Fragment>
                <h1 className="mail-subject">{subject}</h1>
                <p className="mail-body">{body}</p>
                <h4 onClick={() => { this.props.onDeleteMail(id) }} >Delete</h4>
                <h4 onClick={() => { this.toggleReplay() }}>Re</h4>
                { (this.state.isReplay) &&<EmailReplayList replays={replays} />}
                {this.state.isReplay && <EmailReplaySubmit id={id} onSaveReplay={this.props.onSaveReplay} />}
            </React.Fragment>
        )

    }
}