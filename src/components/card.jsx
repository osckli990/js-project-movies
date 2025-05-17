import { Link } from "react-router";

export const Card = ({ movie }) => {
  const imgSize = "w92";
  const imgPoster = `https://image.tmdb.org/t/p/${imgSize}${movie.poster_path}`;

  return (
    <Link to={`/movies/${movie.id}`}>
      <figure className="">
        <img className="" src={imgPoster} />
        <p className="font-[30px]">{movie.title}</p>
        <p>{movie.release_date}</p>
      </figure>
    </Link>
  );
};
