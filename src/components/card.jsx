import { Link } from "react-router";

export const Card = ({ movie }) => {
  console.log(movie);

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="">
        <p>{movie.title}</p>
      </div>
    </Link>
  );
};
