export function LongTxt({ text, isLongTxtShown, toggleTxtShown }) {

    text = isLongTxtShown ? text : text.substring(0, 100) + '...'
    let btnTxt = !isLongTxtShown ? 'Read More' : 'Read Less'

    return (
        <article className="long-txt">
            <p>{text}</p>
            <button className="btn-read-more" onClick={toggleTxtShown}>{btnTxt}</button>
        </article>

    )
}