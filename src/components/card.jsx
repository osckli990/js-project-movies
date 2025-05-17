import { Link } from "react-router";

export const Card = ({ movie }) => {
  const imgSize = "w780";
  const imgPoster = `https://image.tmdb.org/t/p/${imgSize}${movie.poster_path}`;

  return (
    <Link to={`/movies/${movie.id}`}>
      <figure className="w-full">
        <img className="object-contain" src={imgPoster} />
        <p className="">{movie.title}</p>
        <p className="">{movie.release_date}</p>
      </figure>
    </Link>
  );
};
