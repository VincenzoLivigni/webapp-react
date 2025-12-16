import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import HomePage from "../pages/Homepage"
import Movies from "../pages/Movies"
import MovieDetail from "../pages/MovieDetail"
import { LoadingProvider } from "../contexts/LoadingContext"
import Loader from "../components/Loader"


function App() {

  return (
    <>
      <LoadingProvider>
        <Loader />
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/movies" element={<Movies />}></Route>
              <Route path="/movies/:id" element={<MovieDetail />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoadingProvider>
    </>
  )
}

export default App
