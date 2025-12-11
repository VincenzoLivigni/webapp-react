import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <nav
            className="navbar navbar-expand-md bg-warning">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Movies reviews</NavLink>
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
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" aria-current="page">Home
                                <span className="visually-hidden">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Link</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}