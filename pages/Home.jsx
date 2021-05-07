const { Link } = ReactRouterDOM
export function Home() {

    return (
        <section className="home-page">
            <img className="home-img" src="./assets/img/home_background.png" alt="" />
            <div className="home-txt">
                <h1>Welcome to AppSus!</h1>
                <h3>Check out our great apps</h3>
                <div className="gmail-keep-img">
                    <Link to="/mail">
                        <img className="gmail" src="./assets/img/gmail.svg" alt="" />
                    </Link>
                    <Link to="/keep">
                        <img className="keep" src="./assets/img/google-keep.svg" alt="" />
                    </Link>
                </div>
            </div>
        </section>
    )
}



