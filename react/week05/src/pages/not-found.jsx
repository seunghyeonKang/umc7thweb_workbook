import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 20px;
  width: 100vw;
  height: 100vh;

  color: #ffffff;
`;
const Contents = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #ffffff;
`;

export default function NotFound() {
  return (
    <Container>
      <Contents>경로가 잘못된 페이지입니다.</Contents>
      <br />
      <Link to="/">
        <Contents>메인 페이지로 돌아가기</Contents>
      </Link>
    </Container>
  );
}
