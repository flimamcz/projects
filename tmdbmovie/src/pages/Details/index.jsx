import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIKey } from "../../config/key";
import { Container } from "./style";
const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, release_date, overview} = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />

        <div className="details">
          <h1>{movie.title}</h1>
          <p>Sinopse: {movie.sinopse}</p>
          <p className="release_date">Data de lançamento: {movie.releaseDate}</p>
          <Link to="/">
            <button>Página inicial</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Details;
