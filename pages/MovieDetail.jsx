import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import MovieFormReview from "../components/MovieFormReview"

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


    function ratingStars(vote) {

        let stars = []
        for (let i = 1; i <= vote; i++) {
            stars.push(<i className="bi bi-star-fill" key={`fill-${i}`}></i>)
        }

        for (let i = 1; i <= 5 - vote; i++) {
            stars.push(<i className="bi bi-star" key={`${i}`}></i>)
        }

        return stars
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
                    </div>
                </div>

                <MovieFormReview movieId={id} />

                <h3 className="d-block mt-5 mb-3 text-warning">Reviews</h3>
                <ul className="list-unstyled list-group">
                    {
                        singleMovie?.reviews.map((review) => (
                            <li key={review.id} className="list-group-item bg-dark text-warning">
                                <strong className="d-block mb-1">{review.name}</strong>
                                {review.text}
                                <div className="mt-1">
                                    {ratingStars(review.vote)}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>
    )
}

