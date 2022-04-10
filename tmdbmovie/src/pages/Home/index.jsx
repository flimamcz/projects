import { useState, useEffect, Fragment } from "react";
import { Container, MovieList, Movie } from "./style";
import { APIKey } from "../../config/key";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Fragment>
      <Header text="Logado"/>
      <Container>
        <MovieList>
          {movies.map(({ title, poster_path, id }) => {
            return (
              <Movie key={id}>
                <Link to={`/details/${id}}`} href="">
                  <img src={`${image_path}${poster_path}`} alt={title} />
                </Link>
                <span>{title}</span>
              </Movie>
            );
          })}
        </MovieList>
      </Container>
    </Fragment>
  );
};

export default Home;
