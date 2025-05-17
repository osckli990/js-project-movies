import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export const AboutPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetails(data)) // save the movie details to the state variable
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [setMovieDetails]);

  const rounded = Math.round(movieDetails.vote_average * 10) / 10;
  const fixed = rounded.toFixed(1);

  return (
    <div>
      <Link to={"/"}>Movies</Link>

      <h2>{movieDetails.title}</h2>
      <figure>
        <img />
        <p>{fixed}</p>
      </figure>
      <p>{movieDetails.overview}</p>
    </div>
  );
};
