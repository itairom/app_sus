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
    }
    
    
    toggleReply = (ev) => {
        ev.stopPropagation()
        this.setState((prevState) => {
            return { isReply: !prevState.isReply }
        })
    }
    
    render() {
        
        if (!this.state.mail) return <h2>loading2</h2>
        
        // console.log(this.state.mail.replys);
        const { subject, body, isRead, id, replys } = this.state.mail
        // const { toggleDetails } = this.props.toggleDetails
        return (
            <React.Fragment>
                {!this.props.isReply && <section className="mail-details">
                    <h1 onClick={(ev) => { this.props.toggleDetails(ev) }} className="mail-subject">{subject}</h1>
                    <p className="mail-body">{body}</p>
                    {/* {this.state.mail.map(element,idx => {
                        <li>{replys[idx]}</li>})} */}
                    <h4 className="google-btn" onClick={() => { this.props.onDeleteMail(id) }} >Delete</h4>
                    <Link mail={this.mail} className="google-btn" to={`/mail/reply/${id}`}>Reply</Link>
                    {/* <div className="google-btn" >Reply</div> */}
                    {/* {(this.state.isReply) && <EmailReplayList replays={replays} />} */}
                    {/* {this.state.isReply && <EmailReplaySubmit mail={this.state.mail} onSaveReplay={this.props.onSaveReplay} />} */}
                </section >}


            </React.Fragment>
        )
    }
}