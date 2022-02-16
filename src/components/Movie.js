import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./Movie.module.css";

function Movie({
  id,
  medium_cover_image,
  title,
  year,
  summary,
  genres,
  runTime,
}) {
  // 부모에게서 요소를 받아 사용함
  return (
    <div className={style.movie}>
      <Link to={`/movie/${id}`}>
        <img
          src={medium_cover_image}
          alt={title}
          className={style.movie__img}
        />
      </Link>
      <h2 className={style.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      {runTime ? (
        <h3 className={style.movie__genres}>
          Running Time : {Math.floor(runTime / 60)}h{" "}
          {runTime - Math.floor(runTime / 60) * 60}m
        </h3>
      ) : (
        <p> </p>
      )}
      <p className={style.movie__summary}>
        {summary.length > 235
          ? `${summary.slice(0, 235)}...`
          : summary.length < 1
          ? "No Description"
          : summary}
      </p>
      <h3 className={style.movie__year}>Released At {year}</h3>
      <ul className={style.movie__genres}>
        {genres.map((genre) => {
          return <li key={genre}>{genre}</li>;
        })}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runTime: PropTypes.number,
};

export default Movie;
