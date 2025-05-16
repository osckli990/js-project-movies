import { BrowserRouter, Routes, Route } from "react-router";

import { MoviePage } from "./pages/MoviesPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { NotFound } from "./pages/notFound.jsx";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/movies/:movieId" exact element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
