export function ColorCmp({onChangeBgc,note }) {
    
    return (
        <section className="color-cmp">
            <button  className="btn-color purpel" onClick={() => onChangeBgc(note.id,"#d7aefb")}></button>
            <button  className="btn-color blue" onClick={() => onChangeBgc(note.id,"#aecbfa")}></button>
            <button  className="btn-color yellow" onClick={() => onChangeBgc(note.id,"#fbbc04")}></button>
            <button  className="btn-color red" onClick={() => onChangeBgc(note.id,"#f28b82")}></button>
            <button  className="btn-color pink" onClick={() => onChangeBgc(note.id,"#fdcfe8")}></button>
        </section>
    )
}