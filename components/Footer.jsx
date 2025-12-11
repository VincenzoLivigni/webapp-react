import { Link } from "react-router-dom";

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

const policy = [
    {
        id: 1,
        namePage: "Privacy",
        link: "/"
    },
    {
        id: 2,
        namePage: "Terms",
        link: "/"
    },
    {
        id: 3,
        namePage: "Conditions",
        link: "/"
    }
]

export default function Footer() {

    return (
        <footer className="bg-warning">
            <div className="container py-3">
                <div className="row">
                    <div className="col-4">
                        <h3>Logo</h3>
                    </div>


                    <div className="col-4">
                        <h3>Menu</h3>
                        <ul className="list-unstyled">
                            {
                                menu.map((item) => (
                                    <li key={item.id} className="nav-item">
                                        <Link className="nav-link" aria-current="page" to={item.link}>{item.namePage}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-4">
                        <h3>Policy</h3>
                        <ul className="list-unstyled">
                            {
                                policy.map((item) => (
                                    <li key={item.id} className="nav-item">
                                        <Link className="nav-link" aria-current="page" to={item.link}>{item.namePage}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}