import { NoteToolBar } from './NoteToolBar.jsx'

export function NoteTodos({ note, deleteNote,updateNote,onPinnedNote,onChangeBgc}) {

    return (

        <section className="note-todos" style={{ backgroundColor: note.style.backgroundColor }}>
            {note.info.todos.map((todo, idx) => {
                return <div className="todo-container" key={idx} onClick={() => {
                    todo.doneAt = (todo.doneAt) ? null : Date.now();

                }}>
                    <input className="check-input" type="checkbox" name="vehicle1" value=""></input>
                    <p className={`todo ${todo.doneAt && 'todo-done'}`}>{todo.txt}</p>
                    {todo.doneAt && <span>{Intl.DateTimeFormat('IL-il').format(todo.doneAt)}</span>}

                </div>

            })}
            <NoteToolBar onChangeBgc={onChangeBgc} onPinnedNote={onPinnedNote} deleteNote={deleteNote} note={note} updateNote={updateNote} />
        </section>


    )

}
