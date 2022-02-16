import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

import style from "./Detail.module.css";

function Detail() {
  // useParams 를 통해 url 에 들어가는 변수의 값을 확인할 수 있음!
  // const x = useParams();
  const { id } = useParams();
  // console.log(id);
  const [detail, setDetail] = useState("");
  const [loading, setLoadging] = useState(true);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);
    if (json) {
      setLoadging(false);
    }
    setDetail(json.data.movie);
  };
  // console.log(detail);
  // console.log(detail.data.movie);
  useEffect(() => {
    getMovies();
  }, []);
  // return <div></div>
  const { large_cover_image, title, description_full, rating, genres } = detail;

  return (
    <div>
      {loading ? (
        <div className={style.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={style.detail__container}>
          <img
            src={large_cover_image}
            alt={title}
            className={style.detail__img}
          />
          <div className={style.detail__information}>
            <h1 className={style.detail__title}>Details About - {title}</h1>
            <ul className={style.detail__genres}>
              {genres &&
                genres.map((genre) => {
                  return <li key={genre}>{genre}</li>;
                })}
            </ul>
            <p className={style.detail__description}>{description_full}</p>
            <h2 className={style.detail__rating}>Rating : {rating}</h2>
          </div>
        </div>
      )}
      <hr />
      <Nav />
    </div>
  );
}

export default Detail;
