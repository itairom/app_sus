const { Route, Switch, Link } = ReactRouterDOM

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
        if (!this.state.mail) return <h2>loading</h2>
        const { subject, body, isRead, id, replys } = this.state.mail
        return (
            <React.Fragment>
                {!this.props.isReply && <section className="mail-details">
                    <h1 onClick={(ev) => { this.props.toggleDetails(ev) }} className="mail-subject">{subject}</h1>
                    <p className="mail-body">{body}</p>
                    {this.state.mail.img && <img className="mail-img" src={this.state.mail.img} />}
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
                </section >}
            </React.Fragment>

        )
    }
}