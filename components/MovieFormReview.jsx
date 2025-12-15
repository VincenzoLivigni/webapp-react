import { useState } from "react"
import axios from "axios"

export default function MovieFormReview({ movieId }) {

    const [formData, setFormData] = useState({
        name: "",
        vote: "",
        text: "",
    })


    function handleSubmit(e) {
        e.preventDefault()

        axios.post(`http://localhost:3000/movies/${movieId}/reviews`, formData)
            .then((res) => {
                setFormData({
                    name: "",
                    vote: "",
                    text: "",
                })
            })
    }

    return (
        <div className="container text-warning mt-5">
            <h3>Leave your review</h3>

            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="name" className="Form-label mb-2">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="add your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <select
                    className="form-select"
                    value={formData.vote}
                    onChange={(e) => setFormData({ ...formData, vote: e.target.value })}>
                    <option value="">Select rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <div className="mb-3">
                    <label htmlFor="review" className="form-label mb-2">Review</label>
                    <textarea className="form-control" name="review" id="review" rows="4" placeholder="add your review" value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}></textarea>
                </div>

                <button
                    type="submit" className="btn btn-warning text-dark">
                    Submit
                </button>

            </form>
        </div>
    )
}