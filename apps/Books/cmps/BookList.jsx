import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onSelectBook }) {
    return (
        <div className="book-list">
            {books.map(book => (
                <BookPreview book={book} key={book.id} onSelectBook={onSelectBook} />
            ))}
        </div>
    )
}