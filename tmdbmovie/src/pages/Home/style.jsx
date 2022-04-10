import styled from "styled-components";

export const Container = styled.div`
  width: min(80%, 1200px);
  margin: 0 auto;
`;

export const MovieList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 0.375rem;
    margin-bottom: 2rem;
  }

  span {
    text-align: center;
    font-weight: bold;
    font-size: 120%;
  }

  a:hover {
    transform: scale(1.08);
    transition: 0.3s;
  }
`;
