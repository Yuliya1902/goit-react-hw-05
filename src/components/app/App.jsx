import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Loader } from "../loader/Loader";
import NotFoundPage from "../../pages/not-found-page/NotFoundPage";
import Navigation from "../navigation/Navigation";

const MovieCast = lazy(() => import("../movie-cast/MovieCast"));
const MovieReviews = lazy(() => import("../movie-reviews/MovieReviews"));

const HomePage = lazy(() => import("../../pages/home-page/HomePages"));
const MoviesPage = lazy(() => import("../../pages/movies-page/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/movie-details-page/MovieDetailsPage")
);

import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <Navigation />
      <main className="main">
        <div className="container">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:id" element={<MovieDetailsPage />}>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default App;