// import React from "react";
import { mailService } from '../services/mail-service.js'

export class EmailDetails extends React.Component {

    state = {
        mail: null,
        isClicked: null
    }
    componentDidMount() {
        console.log(this.props);
        this.setState({ mail: this.props.mail })
    }

    onDeleteMail = (mailId) => {
        console.log(this.props.history);
        mailService.deleteMailById(this.state.mail.id)
            .then(() => {
                this.props.history.push('/mail')
            })
    }
    render() {

        if (!this.state.mail) return <h2>loading2</h2>

        const { subject, body, isRead, id } = this.state.mail

        return (
            <React.Fragment>
                <h1 className="mail-subject">{subject}</h1>
                <p className="mail-body">{body}</p>
                <h4 onClick={this.onDeleteMail} >Delete</h4>
                
            </React.Fragment>
        )

    }
}