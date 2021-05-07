const { Link } = ReactRouterDOM

export function BookPreview({ book }) {

    const getCurrency = () => {
        switch (book.listPrice.currencyCode) {
            case 'ILS':
                return '₪';
            case 'USD':
                return '$'
            case 'EUR':
                return '€'
        }
    }

    return (
        <Link to={`/book/${book.id}`}>
            <section className="book-preview">
                <img className="img" src={book.thumbnail} alt="" />
                <p>{book.title}</p>
                <p>Price: {book.listPrice.amount} <span>{getCurrency()}</span> </p>
            </section>
        </Link>

    )
}