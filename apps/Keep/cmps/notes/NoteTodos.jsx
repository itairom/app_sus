export function NoteTodos({note,deleteNote}){

    return(
        <section className="note-todos">
            {note.info.todos.map((todo,idx)=>{
                return<div className="todo-container" key={idx} onClick={()=>{
                    todo.doneAt = (todo.doneAt)? null: Date.now();

                }}>
                    <p className={`todo ${todo.doneAt && 'todo-done'}`}>{todo.txt}</p>
                    {todo.doneAt &&<span>{Intl.DateTimeFormat('IL-il').format(todo.doneAt)}</span>}

                </div>
                
                
            })}
            <span onClick={() => deleteNote(note.id)}>X</span>
        </section>

    )

}