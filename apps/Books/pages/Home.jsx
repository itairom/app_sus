const { Link } = ReactRouterDOM

export function Home() {
    return <section>
        <div className="home justify-content">
        <h1>Home</h1>
            <img src="../assets/img/bookShope.jpg" alt="" />
        <p>Check out our awesome <Link className="book-link" to="/book">Books</Link> </p>
        </div>
    </section>
}