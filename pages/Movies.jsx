import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Movies() {

    const [movies, setMovies] = useState([])

    const url = "http://localhost:3000/movies"

    useEffect(() => {


        axios.get(url)
            .then(res => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])



    return (
        <main className="bg-dark">
            <h1 className="pt-5 pb-3 text-center text-warning">Movies</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {
                        movies.map((item) => (
                            <div key={item.id} className="col">
                                <div className="card my-5">
                                    <div className="card-top p-2 bg-warning">
                                        <img className="img" src={`http://localhost:3000/images/${item.image}`} />
                                        <div className="card-body p-2 bg-warning text-dark">
                                            <h4>Title: {item.title}</h4>
                                            <h6 className="mt-3 mb-4">Director: {item.director}</h6>
                                            <button className="btn btn-dark">
                                                <Link className="text-light" to={`/movies/${item.id}`}>Movie Detail</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}