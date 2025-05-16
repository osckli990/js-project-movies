import { BrowserRouter, Routes, Route } from "react-router";

import { notFound } from "./pages/notFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<moviePage />} />
          <Route path="/movies/:movieId" exact element={<aboutPage />} />
          <Route path="*" element={<notFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
