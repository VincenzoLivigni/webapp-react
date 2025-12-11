import { Link } from "react-router-dom";

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
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Link</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h3>Policy</h3>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Privacy</Link>
                            </li>
                            <li>
                                <Link to="/">Terms</Link>
                            </li>
                            <li>
                                <Link to="/">Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}