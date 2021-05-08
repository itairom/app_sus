const { Link, Route } = ReactRouterDOM

import { mailService } from '../services/mail-service.js'
import { EmailDetails } from './EmailDetails.jsx'
import { LongTxt } from '../cmps/util/LongTxt.jsx'

export class EmailPreview extends React.Component {

    state = {
        mail: null,
        visibility: null,
        isClicked: false,
        isStarred: false
    }

    componentDidMount() {
        this.setState({ mail: this.props.mail })
    }

    toggleDetails = (ev) => {
        ev.stopPropagation()
        this.setState({ isClicked: !this.state.isClicked })
        this.toggleRead(ev)
    }


    toggleRead = (ev) => {
        ev.preventDefault()
        this.props.onSetRead(this.state.mail.id)
    }

    // toggleStarred = (ev) => {
    //     ev.preventDefault()
    //     this.props.onSetRead(this.state.mail.id)
    // }

    toggleStarred() {
        mailService.setStarred(this.state.mail.id)
        this.setState({ isStarred: !this.state.isStarred })
    }

    dateToString(strTime) {
        let date = new Date(strTime);
        return date.toDateString()
    }

    render() {

        if (!this.state.mail) return <h2>loading</h2>
        const { mail,isStarred } = this.state
        const { subject, body, isRead, id, sentAt } = mail
        


        return (

            <div className="card-preview " >

                {!isStarred && <img className="star-icon" onClick={() => this.toggleStarred()} src="apps/Mail/asset/svg/star.svg" />}
                {isStarred && <img className="star-icon" onClick={() => this.toggleStarred()} src="apps/Mail/asset/svg/star-fill.svg" />}

                <div className="sender-name flex">Tair Bitan</div>
                {!this.state.isClicked &&

                    <div className="preview-subject flex" onClick={(ev) => { this.toggleDetails(ev) }} className={(!isRead ? 'bold' : '')}  >
                        <LongTxt className="preview-subject " text={subject} />
                    </div>}

                <div className="msg-date flex">{this.dateToString(sentAt)}</div>

                {this.state.isClicked && <EmailDetails onSaveReply={this.props.onSaveReply} toggleDetails={this.toggleDetails} onDeleteMail={this.props.onDeleteMail} mail={mail} />}
            </div>
        )

    }



}