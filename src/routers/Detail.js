import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';

function Detail() {
  // useParams 를 통해 url 에 들어가는 변수의 값을 확인할 수 있음!
  // const x = useParams();
  const { id } = useParams();
  // console.log(id);
  const [detail, setDetail] = useState("");
  const getMovies = async () => {
    const json = await ( 
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);
    setDetail(json.data.movie);
  };
  // console.log(detail)
  // console.log(detail.data.movie);
  useEffect(() => {
    getMovies();
  }, [])
  // return <div></div>
  const {large_cover_image, title, description_full, rating} = detail;
  return (
    <div>
      <Nav /> 
      <img src={large_cover_image} alt={title} />
      <h1>Details About {title}</h1>
      <p>{description_full}</p>
      <h2>Rating : {rating}</h2>
      <hr />
    </div>  
  );
};

export default Detail;