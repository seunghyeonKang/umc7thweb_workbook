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

export default function MovieInfo({ movieId }) {
  const { movies, loading, error } = useCustomAxios(`/movie/${movieId}?language=ko-US`);
  console.log("영화 정보", movies);

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (error) return <p style={{ color: "white" }}>Error: {error}</p>;

  return (
    <Container>
      <Contents>제목: {movies.data.title}</Contents>
      <Contents>평점: {movies.data.vote_average}</Contents>
      <Contents>개봉 연도: {movies.data.release_date}</Contents>
      <Contents>런타임: {movies.data.runtime}</Contents>
      <Contents>한줄: {movies.data.tagline}</Contents>
      <Contents>스토리: {movies.data.overview}</Contents>
      <Contents>장르: genres</Contents>
    </Container>
  );
}
