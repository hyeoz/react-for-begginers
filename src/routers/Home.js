import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => { // async - await 방식
    const res = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {getMovies();}, [])
  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setMovies(json.data.movies);
  //     setLoading(false);
  //   });
  // }, []);
  // console.log(movies);
  return (
    <div className={style.container}>
      {loading ? ( 
      <div className={style.loader}>
        <h1>Loading...</h1> 
      </div>
      ) : ( 
        <div className={style.movies}>
          {movies.map((el) => { // props 화 시키기
            return (
              <Movie
                key={el.id}
                id={el.id} // id를 파라미터로 받아 라우팅해주기 위해
                medium_cover_image={el.medium_cover_image} 
                title={el.title}
                year={el.year}
                summary={el.summary}
                genres={el.genres}
              /> // 보내줄 변수들을 지정해주기
            )
          })}
        </div>
        )
      }
    </div>
  );
};

export default Home;