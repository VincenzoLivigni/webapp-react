import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import HomePage from "../pages/Homepage"
import Movies from "../pages/Movies"
import MovieDetail from "../pages/MovieDetail"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:id" element={<MovieDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
