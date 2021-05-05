export class LongTxt extends React.Component {

    state = {
        isLongShown: false,
    }
    onToggleShow = () => {
        this.setState(({ isLongShown }) => ({ isLongShown: !isLongShown }))
    }
    render() {
        const { isLongShown } = this.state
        const isOver70 = (this.props.text.length > 70) ? true : false;
        let shortTxt = this.props.text.slice(0, 70)
        if (isOver70) shortTxt += '...'
        return <section>
            <p>
                <span>{isLongShown ? this.props.text : shortTxt}</span>
                {isOver70 && <span className="txt-show-btn" onClick={this.onToggleShow}>{isLongShown ? 'Show Less' : 'Shoe More'}</span>}
            </p>
        </section>
    }


}