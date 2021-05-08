export class LongTxt extends React.Component {

    state = {
        isLongShown: false,
    }
    onToggleShow = () => {
        this.setState(({ isLongShown }) => ({ isLongShown: !isLongShown }))
    }
    render() {
        const { isLongShown } = this.state
        const isOver50 = (this.props.text.length > 50) ? true : false;
        let shortTxt = this.props.text.slice(0, 50)
        if (isOver50) shortTxt += '...'
        return <section>
            <p>
                <span>{isLongShown ? this.props.text : shortTxt}</span>
                {isOver50 && <span className="txt-show-btn" onClick={this.onToggleShow}>{isLongShown ? 'Show Less' : ''}</span>}
            </p>
        </section>
    }


}