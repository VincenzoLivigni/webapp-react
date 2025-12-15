import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <main className="bg-dark">
            <h1 className="pt-5 pb-3 text-center text-warning">Benvenuto su Movies App</h1>
            <div className="container text-warning">
                <section className="mb-5">
                    <h3>Movies</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsam ducimus natus nesciunt fugit repellendus assumenda voluptate quos possimus vero eum, sit repellat nihil amet. Suscipit animi vero omnis adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum blanditiis vel ea earum placeat necessitatibus magni omnis, velit nobis excepturi in explicabo tempore aperiam illum, voluptatum quam adipisci itaque. Reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, alias rerum? Voluptates alias iste dicta sit, ullam aperiam neque tempora deleniti animi numquam, eligendi fugit nobis. Porro sapiente repudiandae beatae.</p>
                </section>

                <section className="mb-5">
                    <h3>Series</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsam ducimus natus nesciunt fugit repellendus assumenda voluptate quos possimus vero eum, sit repellat nihil amet. Suscipit animi vero omnis adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum blanditiis vel ea earum placeat necessitatibus magni omnis, velit nobis excepturi in explicabo tempore aperiam illum, voluptatum quam adipisci itaque. Reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, alias rerum? Voluptates alias iste dicta sit, ullam aperiam neque tempora deleniti animi numquam, eligendi fugit nobis. Porro sapiente repudiandae beatae.</p>
                </section>

                <section className="pb-5 text-end">
                    <button className="btn btn-warning">
                        <Link className="text-dark" to={"/movies"}>Movie List</Link>
                    </button>
                </section>
            </div>
        </main>
    )
}