import { NavLink } from "react-router-dom";

const menu = [
    {
        id: 1,
        namePage: "HomePage",
        link: "/"
    },
    {
        id: 2,
        namePage: "Movies",
        link: "/movies"
    }
]

export default function Navbar() {

    return (
        <nav
            className="navbar navbar-expand-md bg-warning">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Movies app</NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main-menu"
                    aria-controls="main-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main-menu">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        {
                            menu.map((item) => (
                                <li key={item.id} className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to={item.link}>{item.namePage}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}