import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCustomAxios from "../../hooks/useCustomAxios";

const Container = styled.div`
  margin: 0;
  padding: 20px;
  width: 100%;
  height: 100%;

  color: #ffffff;
`;
const Contents = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #ffffff;
`;

// const { movies, loading, error } = useCustomAxios(`/movie/${path}?language=ko-US&page=1`);

export default function MovieCredit({ movieId }) {
  const { movies, loading, error } = useCustomAxios(`movie/${movieId}/credits?language=ko-US`);
  console.log("감독/출연", movies);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (error) return <p style={{ color: "white" }}>Error: {error}</p>;

  return (
    <Container>
      <Contents>감독/출연</Contents>
      {movies.data?.cast.map((movie) => {
        return (
          <li key={movie.id} movie={movie}>
            <p>{movie.name}</p>
            <p>{movie.original_name}</p>
          </li>
        );
      })}
    </Container>
  );
}
