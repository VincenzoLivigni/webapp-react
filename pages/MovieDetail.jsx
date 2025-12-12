import { Link } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function MovieDetail() {

    const [singleMovie, setSingleMovie] = useState(null)
    const { id } = useParams()

    const url = `http://localhost:3000/movies/${id}`

    useEffect(generaMovie, [])

    function generaMovie() {
        axios
            .get(url)
            .then(res => {
                console.log(res.data)
                setSingleMovie(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <main className="bg-dark">
            <div className="container pb-5">
                <h3 className="text-center py-5 text-warning">{singleMovie?.title}</h3>
                <div className="card-content d-flex g-3">
                    <div className="card-image-top">
                        <img className="img_single" src={`http://localhost:3000/images/${singleMovie?.image}`} />
                    </div>
                    <div className="card-body text-warning ms-3">
                        <span><strong>Director</strong>: {singleMovie?.director}</span>
                        <hr />
                        <span><strong>Genre</strong>: {singleMovie?.genre}</span>
                        <hr />
                        <span><strong>Relese year</strong>: {singleMovie?.release_year}</span>
                        <hr />
                        <span><strong>Abstract</strong>: {singleMovie?.abstract}</span>
                        <hr />
                        <h5>Reviews</h5>
                        <ul className="list-unstyled">
                            {
                                singleMovie?.reviews.map((review) => (
                                    <li key={review.id} className="mb-2">
                                        <strong>- {review.name}:</strong> {review.text}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )

}
