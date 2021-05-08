const { Route, Switch, Link } = ReactRouterDOM

import { mailService } from '../services/mail-service.js'
import { EmailReplySubmit } from './EmailReplySubmit.jsx'



export class EmailDetails extends React.Component {

    state = {
        mail: null,
        isClicked: null,
        isReply: false
    }
    componentDidMount() {
        this.setState({ mail: this.props.mail })
        console.log(this.props);
    }


    toggleReply = (ev) => {
        ev.stopPropagation()
        this.setState((prevState) => {
            return { isReply: !prevState.isReply }
        })
    }

    render() {

        if (!this.state.mail) return <h2>loading2</h2>


        const { subject, body, isRead, id, replys } = this.state.mail
        // const { toggleDetails } = this.props.toggleDetails
        return (
            <React.Fragment>
                {!this.props.isReply && <section className="mail-details">
                    <h1 onClick={(ev) => { this.props.toggleDetails(ev) }} className="mail-subject">{subject}</h1>
                    <p className="mail-body">{body}</p>
                    {this.state.mail.replys.map((reply, idx) => {
                        return <div className="reply-container flex">
                            <img className="profile-icon" src="assets/img/profile_icon.png" />
                            <li>Tair Bitan</li>
                            <li className="reply-list">{reply.subject}</li>
                        </div>
                    })}
                    <h4 className="google-btn del" onClick={() => { this.props.onDeleteMail(id) }} >
                        <img src="apps/Mail/asset/svg/trash.svg" />
                        Delete</h4>
                    <Link mail={this.mail} className="google-btn rep" to={`/mail/reply/${id}`}>
                        <img src="apps/Mail/asset/svg/reply.svg" />
                        Reply</Link>
                    {/* <div className="google-btn" >Reply</div>
                    {this.state.isReply && <EmailReplaySubmit mail={this.state.mail} onSaveReplay={this.props.onSaveReplay} />} */}
                </section >}
            </React.Fragment>

        )
    }
}