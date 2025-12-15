export default function MovieFormReview() {

    return (
        <div className="container text-warning mt-5">
            <h3>Leave your review</h3>

            <form>
                <div className="my-3">
                    <label htmlFor="name" className="Form-label mb-2">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="add your name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="review" className="form-label mb-2">Review</label>
                    <textarea className="form-control" name="review" id="review" rows="4" placeholder="add your review"></textarea>
                </div>

                <button
                    type="submit" className="btn btn-warning text-dark">
                    Submit
                </button>

            </form>
        </div>
    )
}